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

class CreateSale(APIView):
    # @csrf_exempt
    # def get(self, request, format=None):
    #     sale = Sale.objects.all()

    #     if request.query_params.get('age'):
    #          prods = prods.filter(name_contains=request.query_params.get('age'))
    #     if request.query_params.get('sex'):
    #          prods = prods.filter(name_contains=request.query_params.get('sex'))
    #     if request.query_params.get('bmi'):
    #          prods = prods.filter(name_contains=request.query_params.get('bmi'))
    #     if request.query_params.get('children'):
    #          prods = prods.filter(name_contains=request.query_params.get('children'))
    #     if request.query_params.get('smoker'):
    #          prods = prods.filter(name_contains=request.query_params.get('smoker'))
    #     if request.query_params.get('region'):
    #          prods = prods.filter(name_contains=request.query_params.get('region'))

    #     serializer = SaleSerializer(sale, many=True)
    #     return Response(serializer.data)
          

    @csrf_exempt
    def post(self, request, format=None):
        body = json.loads(request.body) 
        print(body)


    #     sale = Sale()
    #     sale.age = body['age']
    #     sale.sex = body['sex']
    #     sale.bmi = body['bmi']
    #     sale.children = body['children']
    #     sale.smoker = body['smoker']
    #     sale.region = body['region']

    #     sale.save()
    #     print(sale)
    #     serializer = SaleSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # this view receives parameters from the submit html template and calls the API in azure
        # this contains API code for Python and Python3 

        # If you are using Python 3+, import urllib instead of urllib2
        #import urllib2.request


        # assign all the parameters to variables which you put in the API like the commented code
        # or just put them in directly like I did farther down
        
        # age = str(request.POST['age'])
        # sex = str(request.POST['sex'])
        # bmi = str(request.POST['bmi'])
        # children = str(request.POST['children'])
        # smoker = str(request.POST['smoker'])
        # region = str(request.POST['region'])
        
        # formatting the data into a data object for the API call
        data =  {
                    "Inputs": {
                        "input1":
                        {
                            "ColumnNames": [ "age", "sex", "bmi", "children", "smoker", "region", "charges"],
                            "Values": [[ body['age'], body['sex'], body['bmi'], body['children'], body['smoker'], body['region'], "0" ],]
                        }, # in the values array above it may seem weird to put a value for the response var, but azure needs something
                    },
                    "GlobalParameters": {
                    }
                }

        # the API call
        bodys = str.encode(json.dumps(data))
        url = 'https://ussouthcentral.services.azureml.net/workspaces/5356028fcc494f24b2da50eee758907a/services/6aea8038c831480186111165197b1f79/execute?api-version=2.0&details=true'
        api_key = 'pEN3GQwATQpT30eMdeVM12LyqIxX3wS1LYyhhuAFqTbeqWi/1Kt/2zhjQDLLk1GHWvrgrt/U6LCVTfc52HSTuQ=='
        # Replace my url and api_key with your own values
        headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_key)}

        # If you are using Python 3+, replace urllib2 with urllib.request
        #req = urllib2.Request(url, body, headers)
        req = urllib.request.Request(url, bodys, headers) 

        # python3 uses urllib while python uses urllib2
        #response = urllib2.request.urlopen(req)
        response = urllib.request.urlopen(req)

        # this formats the results 
        result = response.read()
        result = json.loads(result) # turns bits into json object
        result = result["Results"]["output1"]["value"]["Values"][0][7] 
        # azure send the response as a weird result object. It would be wise to postman to find the 
        # path to the response var value

        return Response({"result": result}) # this path assumes that this file is in the root directory in a folder named templates
        # the third parameter sends the result (the response variable value) to the template to be rendered