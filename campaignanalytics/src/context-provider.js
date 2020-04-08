import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'
import { produce } from 'immer'

/** The context provider for our app */
export default class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.actions = {
            // accessed using context.method
            loadMoreCamp: this.loadMoreCamp,
            filterCampaigns: this.filterCampaigns,
            resetShowCount: this.resetShowCount
        }
        this.state = {
            campaign: [],
            donation: [],
            update: [],
            showCount: 8,
            showMore: false,
            filteredCampaigns: []
        }
    }

    render() {
        if (!this.state.campaign) {
            return <div>Loading...</div>
        }
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    resetShowCount = () => {
        this.setState(state => produce(state, draft => {
            draft.showCount = 8;
        }))
    }

    loadMoreCamp = (input) => {
        this.setState(state => produce(state, draft => {
            if(input === true) {
                draft.showMore = input
                draft.showCount = draft.showCount + 8
            }
        }))
    }

    filterCampaigns = (goalFilter, countryFilter, stateFilter, hasBeneficiaryFilter, percentGoalFilter) => {
        this.setState(state => produce(state, draft => {
            // FILTER GOALS
            if(goalFilter === "<2000"){
                draft.filteredCampaigns = draft.campaign.filter(camp => parseInt(camp.goal) < 2000)}
            else if(goalFilter === "2000-9999"){
                draft.filteredCampaigns = draft.campaign.filter(camp => parseInt(camp.goal) >= 2000 && parseInt(camp.goal) < 10000)}
            else if(goalFilter === "10000-29999"){
                draft.filteredCampaigns = draft.campaign.filter(camp => parseInt(camp.goal) >= 10000 && parseInt(camp.goal) < 30000)}
            else if(goalFilter === ">=30000"){
                draft.filteredCampaigns = draft.campaign.filter(camp => parseInt(camp.goal) >= 30000)}
            else{
                draft.filteredCampaigns = draft.campaign}

            // FILTER COUNTRIES
            if(countryFilter !== ""){
                draft.filteredCampaigns = draft.filteredCampaigns.filter(camp => camp.location_country === countryFilter)}
            
            // FILTER STATES
            if(stateFilter !== ""){
                draft.filteredCampaigns = draft.filteredCampaigns.filter(camp => camp.location_city.slice(-2) === stateFilter)}   
                
            // FILTER HAS_BENEFICIARY
            if(hasBeneficiaryFilter === ""){}
            else if(hasBeneficiaryFilter === "True"){
                draft.filteredCampaigns = draft.filteredCampaigns.filter(camp => camp.has_beneficiary === "True")}
            else if(hasBeneficiaryFilter === "False"){
                draft.filteredCampaigns = draft.filteredCampaigns.filter(camp => camp.has_beneficiary === "False")}

            // FILTER GOAL PERCENT COMPLETE
            if(percentGoalFilter === ""){}
            else if(percentGoalFilter === "<5"){
                draft.filteredCampaigns = draft.filteredCampaigns.filter(camp => (parseFloat(camp.current_amount)/parseFloat(camp.goal)*100).toFixed(0) < 5)}
            else if(percentGoalFilter === "5-15"){
                draft.filteredCampaigns = draft.filteredCampaigns.filter(camp => (parseFloat(camp.current_amount)/parseFloat(camp.goal)*100).toFixed(0) >= 5 && (parseFloat(camp.current_amount)/parseFloat(camp.goal)*100).toFixed(0) < 15)}
            else if(percentGoalFilter === "15-30"){
                draft.filteredCampaigns = draft.filteredCampaigns.filter(camp => (parseFloat(camp.current_amount)/parseFloat(camp.goal)*100).toFixed(0) >= 15 && (parseFloat(camp.current_amount)/parseFloat(camp.goal)*100).toFixed(0) < 30)}
            else if(percentGoalFilter === "30+"){
                draft.filteredCampaigns = draft.filteredCampaigns.filter(camp => (parseFloat(camp.current_amount)/parseFloat(camp.goal)*100).toFixed(0) >= 30)}
            
        }))
    }

    async componentDidMount() {
        const cam = await axios.get('http://localhost:8000/api/campaign/')
        const don = await axios.get('http://localhost:8000/api/donation/')
        const upd = await axios.get('http://localhost:8000/api/update/')

        // console.log(cam.data)

        this.setState({campaign: cam.data, donation: don.data, update: upd.data})
    }

}
