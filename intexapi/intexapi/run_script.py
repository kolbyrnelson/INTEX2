#!/usr/bin/env python3
import django
import json
import os

# initialize django
os.environ['DJANGO_SETTINGS_MODULE'] = 'intexapi.settings'
django.setup()

# regular imports
from api.models import Campaign, Donation, Update

# main script
def main():
    with open('campaign_small_v1.json', encoding='utf8') as json_file:
        data = json.load(json_file)
    
    for camp in data['campaign']:
        
        # if not Category.objects.filter(campaign_id=['category']).exists():
        #     #add new category
        #     newcat = Category()
        #     newcat.title = cat['category']
        #     newcat.save()
        
        dbcamp = Campaign()

        dbcamp.url= camp['url']
        dbcamp.campaign_id = camp['campaign_id']
        dbcamp.auto_fb_post_mode = camp['auto_fb_post_mode']
        dbcamp.collected_date = camp['collected_date']
        dbcamp.category_id = camp['category_id']
        dbcamp.category = camp['category']
        dbcamp.currencycode = camp['currencycode']
        dbcamp.current_amount = camp['current_amount']
        dbcamp.goal = camp['goal']
        dbcamp.donators = camp['donators']
        dbcamp.days_active = camp['days_active']
        dbcamp.days_created = camp['days_created']
        dbcamp.title = camp['title']
        dbcamp.description = camp['description']
        dbcamp.default_url = camp['default_url']
        dbcamp.has_beneficiary = camp['has_beneficiary']
        dbcamp.media_type = camp['media_type']
        dbcamp.project_type = camp['project_type']
        dbcamp.turn_off_donations = camp['turn_off_donations']
        dbcamp.user_id = camp['user_id']
        dbcamp.user_first_name = camp['user_first_name']
        dbcamp.user_last_name = camp['user_last_name']
        dbcamp.user_facebook_id = camp['user_facebook_id']
        dbcamp.user_profile_url = camp['user_profile_url']
        dbcamp.visible_in_search = camp['visible_in_search']
        dbcamp.status = camp['status']
        dbcamp.deactivated = camp['deactivated']
        dbcamp.state = camp['state']
        dbcamp.is_launched = camp['is_launched']
        dbcamp.campaign_image_url = camp['campaign_image_url']
        dbcamp.launch_date = camp['launch_date']
        dbcamp.campaign_hearts = camp['campaign_hearts']
        dbcamp.social_share_total = camp['social_share_total']
        dbcamp.social_share_last_update = camp['social_share_last_update']
        dbcamp.location_city = camp['location_city']
        dbcamp.location_country = camp['location_country']
        dbcamp.location_zip = camp['location_zip']
        dbcamp.is_charity = camp['is_charity']
        dbcamp.charity_valid = camp['charity_valid']
        dbcamp.charity_npo_id = camp['charity_npo_id']
        dbcamp.charity_name = camp['charity_name']
        dbcamp.velocity = camp['velocity']
        
        dbcamp.save()
    
    print('Done with campaigns')
    with open('donation.json', encoding='utf8') as json_file:
        data = json.load(json_file)

    for don in data['donation']:

        dbdon = Donation()

        dbdon.donation_id = don['donation_id']
        dbdon.campaign = Campaign.objects.get(campaign_id=don['campaign_id'])
        dbdon.collected_date = don['collected_date']
        dbdon.amount = don['amount']
        dbdon.is_offline = don['is_offline']
        dbdon.is_anonymous = don['is_anonymous']
        dbdon.name = don['name']
        dbdon.created_at = don['created_at']
        dbdon.profile_url = don['profile_url']
        dbdon.verified = don['verified']

        dbdon.save()
    print('Done with donations')

    with open('update.json', encoding='utf8') as json_file:
        data = json.load(json_file)
    
    for up in data['update']:

        dbup = Update()

        dbup.update_id = up['update_id']
        dbup.campaign = Campaign.objects.get(campaign_id=up['campaign_id'])
        dbup.collected_date = up['collected_date']
        dbup.photo_url = up['photo_url']
        dbup.created_at = up['created_at']
        dbup.updates_author = up['updates_author']
        dbup.updates_author_type = up['updates_author_type']
        dbup.updates_text = up['updates_text']
        dbup.comments = up['comments']

        dbup.save()
    print('Done with updates')
    print('All done.')

# bootstrap
if __name__ == '__main__':
    main()
