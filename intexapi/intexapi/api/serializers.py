from rest_framework import serializers

from api.models import Campaign, Donation, Update

# Serializers define the API representation.
class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = [ 'title' ]

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = [ 'title' ]
        # fields = [ 'id', 'filename', 'name', 'description', 'price', 'category' ]

class UpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Update
        fields = [ 'title' ]
        # fields = [ 'name', 'address1', 'address2', 'city', 'state', 'zipcode', 'total', 'items', 'payment_intent' ]
