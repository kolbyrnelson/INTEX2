from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse
import urllib
import json
# import stripe
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Campaign, Donation, Update
from api.serializers import CampaignSerializer, DonationSerializer, UpdateSerializer

class CampaignList(APIView):
    '''Get all categories or create a category'''
    @csrf_exempt
    def get(self, request, format=None):
        camps = Campaign.objects.all()
        if request.query_params.get('campaign_id'):
            camps = camps.filter(title__contains=request.query_params.get('campaign_id'))
        serializer = CampaignSerializer(camps, many=True)
        return Response(serializer.data)

    @csrf_exempt
    def post(self, request, format=None):
        serializer = CampaignSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CampaignDetails(APIView):
    '''Work with an individual Category object'''
    @csrf_exempt
    def get(self, request, pk, format=None):
        camp = Campaign.objects.get(campaign_id=pk)
        serializer = CampaignSerializer(camp)
        return Response(serializer.data)

    @csrf_exempt
    def put(self, request, pk, format=None):
        camp = Campaign.objects.get(campaign_id=pk)
        serializer = CampaignSerializer(camp, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @csrf_exempt
    def delete(self, request, pk, format=None):
        camp = Campaign.objects.get(campaign_id=pk)
        camp.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class DonationList(APIView):
    '''Get all categories or create a category'''
    @csrf_exempt
    def get(self, request, format=None):
        dons = Donation.objects.all()

        if request.query_params.get('donation_id'):
             prods = prods.filter(name_contains=request.query_params.get('donation_id'))
        if request.query_params.get('collected_date'):
             prods = prods.filter(name_contains=request.query_params.get('collected_date'))
        if request.query_params.get('amount'):
             prods = prods.filter(name_contains=request.query_params.get('amount'))
        if request.query_params.get('is_offline'):
             prods = prods.filter(name_contains=request.query_params.get('is_offline'))
        if request.query_params.get('is_anonymous'):
             prods = prods.filter(name_contains=request.query_params.get('is_anonymous'))
        if request.query_params.get('name'):
             prods = prods.filter(name_contains=request.query_params.get('name'))
        if request.query_params.get('created_at'):
             prods = prods.filter(name_contains=request.query_params.get('created_at'))
        if request.query_params.get('profile_url'):
             prods = prods.filter(name_contains=request.query_params.get('profile_url'))
        if request.query_params.get('verified'):
             prods = prods.filter(name_contains=request.query_params.get('verified'))

        serializer = DonationSerializer(dons, many=True)
        return Response(serializer.data)

    @csrf_exempt
    def post(self, request, format=None):
        serializer = DonationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DonationDetails(APIView):
    '''Work with an individual Product object'''
    @csrf_exempt
    def get(self, request, pk, format=None):
        don = Donation.objects.get(donation_id=pk)
        serializer = DonationSerializer(don)
        return Response(serializer.data)

    @csrf_exempt
    def put(self, request, pk, format=None):
        don = Donation.objects.get(donation_id=pk)
        serializer = DonationSerializer(don, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @csrf_exempt
    def delete(self, request, pk, format=None):
        don = Donation.objects.get(donation_id=pk)
        don.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UpdateList(APIView):
    '''Get all categories or create a category'''
    @csrf_exempt
    def get(self, request, format=None):
        ups = Update.objects.all()
        if request.query_params.get('update_id'):
            ups = ups.filter(title__contains=request.query_params.get('update_id'))
        serializer = UpdateSerializer(ups, many=True)
        return Response(serializer.data)

    @csrf_exempt
    def post(self, request, format=None):
        serializer = UpdateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateDetails(APIView):
    '''Work with an individual Category object'''
    @csrf_exempt
    def get(self, request, pk, format=None):
        up = Update.objects.get(update_id=pk)
        serializer = UpdateSerializer(up)
        return Response(serializer.data)

    @csrf_exempt
    def put(self, request, pk, format=None):
        up = Update.objects.get(update_id=pk)
        serializer = UpdateSerializer(up, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @csrf_exempt
    def delete(self, request, pk, format=None):
        up = Update.objects.get(update_id=pk)
        up.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class PredictiveAPI(APIView):
    @csrf_exempt
    def post(self, request, format=None):
        body = json.loads(request.body) 
        # print('---------------Body-----------------')
        print(body)

        data = {
                    "Inputs": {
                        "input1": {
                        "ColumnNames": [ 
                            "Column 0",
                            "Unnamed: 0",
                            "campaign_id",
                            "auto_fb_post_mode",
                            "currencycode",
                            "current_amount",
                            "goal",
                            "donators",
                            "days_active",
                            "title",
                            "description",
                            "has_beneficiary",
                            "user_id",
                            "visible_in_search",
                            "is_launched",
                            "campaign_hearts",
                            "social_share_total",
                            "location_city",
                            "location_country",
                            "location_zip",
                            "averageMoneyPerDay",
                            "donationsPerDay"
                        ],
                        "Values": [[
                            body['column'],
                            body['unnamed'],
                            body['campaign_id'],
                            body['auto_fb_post_mode'],
                            body['currencycode'],
                            body['current_amount'],
                            body['goal'],
                            body['donators'],
                            body['days_active'],
                            body['title'],
                            body['description'],
                            body['has_beneficiary'],
                            body['user_id'],
                            body['visible_in_search'],
                            body['is_launched'],
                            body['campaign_hearts'],
                            body['social_share_total'],
                            body['location_city'],
                            body['location_country'],
                            body['location_zip'],
                            body['averageMoneyPerDay'],
                            "0"

                            ],]
                        },
                    },
                    "GlobalParameters": {}
            }

        # the API call
        bodys = str.encode(json.dumps(data))
        # print('---------------JSON Format-----------------')
        # print(bodys)

        url = 'https://ussouthcentral.services.azureml.net/workspaces/c370cb8ac2994180a10fd8f39b30b85b/services/85e24fb6405d449797b6fdf064844cfb/execute?api-version=2.0&details=true'
        api_key = 'T+ftZxWASFIVMRTgOVTVK8GEZy3sRRZj3BeCSX/Hq+oWEl3wDE3s1Aky/sszySX/f22j07oTvni+x8JVpQxESQ=='
        # Replace my url and api_key with your own values
    
        headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_key)}
        # print('---------------Headers-----------------')
        # print(headers)
        # If you are using Python 3+, replace urllib2 with urllib.request
        #req = urllib2.Request(url, body, headers)
        req = urllib.request.Request(url, bodys, headers) 
        # print('---------------REQ-----------------')
        # print(req)
        # python3 uses urllib while python uses urllib2
        #response = urllib2.request.urlopen(req)
        response = urllib.request.urlopen(req)

        # this formats the results 
        result = response.read()
        result = json.loads(result) # turns bits into json object
        result = result["Results"]["output1"]["value"]["Values"][0][23] 
        # azure send the response as a weird result object. It would be wise to postman to find the 
        # path to the response var value

        return Response({"result": result}) # this path assumes that this file is in the root directory in a folder named templates
        # the third parameter sends the result (the response variable value) to the template to be rendered


class QualityAPI(APIView):
    @csrf_exempt
    def post(self, request, format=None):
        body = json.loads(request.body) 
        # print('---------------Body-----------------')
        print(body)

        data = {
                    "Inputs": {
                        "input1": {
                        "ColumnNames": [ 
                            "Column 0",
                            "Unnamed: 0",
                            "campaign_id",
                            "auto_fb_post_mode",
                            "currencycode",
                            "current_amount",
                            "goal",
                            "donators",
                            "days_active",
                            "title",
                            "description",
                            "has_beneficiary",
                            "user_id",
                            "visible_in_search",
                            "is_launched",
                            "campaign_hearts",
                            "social_share_total",
                            "location_city",
                            "location_country",
                            "location_zip",
                            "averageMoneyPerDay",
                            "donationsPerDay",
                            "PercentPerDay",
                            "SharesPerDay",
                            "campaignheartsPerDay"
                        ],
                        "Values": [[
                            body['column'],
                            body['unnamed'],
                            body['campaign_id'],
                            body['auto_fb_post_mode'],
                            body['currencycode'],
                            body['current_amount'],
                            body['goal'],
                            body['donators'],
                            body['days_active'],
                            body['title'],
                            body['description'],
                            body['has_beneficiary'],
                            body['user_id'],
                            body['visible_in_search'],
                            body['is_launched'],
                            body['campaign_hearts'],
                            body['social_share_total'],
                            body['location_city'],
                            body['location_country'],
                            body['location_zip'],
                            body['averageMoneyPerDay'],
                            body['donationsPerDay'],
                            body['PercentPerDay'],
                            body['SharesPerDay'],
                            body['campaignheartsPerDay']
                            ],]
                        },
                    },
                    "GlobalParameters": {}
            }

        # the API call
        bodys = str.encode(json.dumps(data))
        print('---------------JSON Format-----------------')
        print(bodys)

        

        url = 'https://ussouthcentral.services.azureml.net/workspaces/c370cb8ac2994180a10fd8f39b30b85b/services/9559d276022b450d868020d6dfdcbaaf/execute?api-version=2.0&details=true'
        api_key = 'Fmm9k9l01PnDsKI9c7rwaNfkEJkSlD3lj7BUaMQPz1XW8gS2jt917JWcPRDCf64uJK7WnOC23AJP7e/gQzV8vQ=='
        # Replace my url and api_key with your own values
    
        headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_key)}
        print('---------------Headers-----------------')
        print(headers)
        # If you are using Python 3+, replace urllib2 with urllib.request
        #req = urllib2.Request(url, body, headers)
        req = urllib.request.Request(url, bodys, headers) 
        print('---------------REQ-----------------')
        print(req)
        # python3 uses urllib while python uses urllib2
        #response = urllib2.request.urlopen(req)
        response = urllib.request.urlopen(req)

        # this formats the results 
        result = response.read()
        result = json.loads(result) # turns bits into json object
        result = result["Results"]["output1"]["value"]["Values"][0][25] 
        # azure send the response as a weird result object. It would be wise to postman to find the 
        # path to the response var value

        return Response({"result": result}) # this path assumes that this file is in the root directory in a folder named templates
        # the third parameter sends the result (the response variable value) to the template to be rendered