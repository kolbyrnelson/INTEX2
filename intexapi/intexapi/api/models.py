from api.fields import JSONField
from django.db import models

# Create your models here.
class Campaign(models.Model):
    url = models.TextField()
    campaign_id = models.IntegerField()
    auto_fb_post_mode = models.TextField()
    collected_date = models.TextField()
    category_id = models.IntegerField()
    category = models.TextField()
    currencycode = models.TextField()
    current_amount = models.DecimalField(max_digits=10, decimal_places=2)
    goal = models.DecimalField(max_digits=10, decimal_places=2)
    donators = models.IntegerField()
    days_active = models.IntegerField()
    days_created = models.IntegerField()
    title = models.TextField()
    description = models.TextField()
    default_url = models.TextField()
    has_beneficiary = models.TextField()
    media_type = models.IntegerField()
    project_type = models.IntegerField()
    turn_off_donations = models.IntegerField()
    user_id = models.IntegerField()
    user_first_name = models.TextField()
    user_last_name = models.TextField()
    user_facebook_id = models.BigIntegerField()
    user_profile_url = models.TextField()
    visible_in_search = models.TextField()
    status = models.TextField()
    deactivated = models.TextField()
    state = models.IntegerField()
    is_launched = models.TextField()
    campaign_image_url = models.TextField()
    launch_date = models.TextField()
    campaign_hearts = models.IntegerField()
    social_share_total = models.IntegerField()
    social_share_last_update = models.TextField()
    location_city = models.TextField()
    location_country = models.TextField()
    location_zip = models.IntegerField()
    is_charity = models.TextField()
    charity_valid = models.TextField()
    charity_npo_id = models.TextField()
    charity_name = models.TextField()
    velocity = models.IntegerField()


class Donation(models.Model):
    donation_id = models.TextField()
    campaign_id = models.ForeignKey(Campaign, on_delete=models.PROTECT) # This needs to be a forign key 
    collected_date = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    is_offline = models.TextField()
    is_anonymous = models.TextField()
    name = models.TextField()
    created_at = models.TextField()
    profile_url = models.TextField()
    verified = models.TextField()

class Update(models.Model):
    update_id = models.TextField()  
    campaign_id = models.ForeignKey(Campaign, on_delete=models.PROTECT) # This needs to be a forign key 
    collected_date = models.TextField()
    photo_url = models.TextField()
    created_at = models.TextField()
    updates_author = models.TextField()
    updates_author_type = models.TextField()
    updates_text = models.TextField()
    comments = models.TextField()