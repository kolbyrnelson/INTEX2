from rest_framework import serializers

from api.models import Campaign, Donation, Update

# Serializers define the API representation.
class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = [ 'url', 'campaign_id', 'auto_fb_post_mode', 'collected_date', 'category_id',
         'category', 'currencycode', 'current_amount', 'goal', 'donators', 'days_active', 'days_created',
         'title', 'description', 'default_url', 'has_beneficiary', 'media_type', 'project_type' ,'turn_off_donations' ,
         'user_id', 'user_first_name', 'user_last_name', 'user_facebook_id', 'user_profile_url', 'visible_in_search',
         'status', 'deactivated', 'state', 'is_launched', 'campaign_image_url', 'launch_date', 'campaign_hearts',
         'social_share_total', 'social_share_last_update', 'location_city', 'location_country', 'location_zip',
         'is_charity', 'charity_valid', 'charity_npo_id', 'charity_name', 'velocity']

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = [ 'donation_id', 'campaign_id', 'collected_date', 'amount', 'is_offline', 'is_anonymous',
        'name', 'created_at', 'profile_url', 'verified']

class UpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Update
        fields = [ 'update_id', 'campaign_id', 'collected_date', 'photo_url', 'created_at',
        'updates_author', 'updates_author_type', 'updates_text', 'comments']