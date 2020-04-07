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


# class CreateSale(APIView):
#     '''Creates a sale, including getting a payment intent from Stripe'''
#     @csrf_exempt
#     def post(self, request, format=None):
#         body = json.loads(request.body)
#         print(body)
    
#         sale = Sale()
#         sale.name = body['name']
#         sale.address1 = body['address1']
#         sale.address2 = body['address2']
#         sale.city = body['city']
#         sale.state = body['state']
#         sale.zipcode = body['zipcode']
#         sale.total = body['total']
#         # sale.payment_intent = body['payment_intent']
#         sale.payment_intent = stripe.PaymentIntent.create(
#             amount=int(sale.total * 100),
#             currency='usd'
#         )
#         sale.save()

#         return Response({
#             'sale_id':sale.id,
#             'client_secret': sale.payment_intent['client_secret']
#         })
