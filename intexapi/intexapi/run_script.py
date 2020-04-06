#!/usr/bin/env python3
import django
import json
import os

# initialize django
os.environ['DJANGO_SETTINGS_MODULE'] = 'arcticapiproject.settings'
django.setup()

# regular imports
from api.models import Category, Product

# main script
def main():
    with open('products.json') as json_file:
        data = json.load(json_file)
    
    for prod in data['products']:
        
        if not Category.objects.filter(title=prod['category']).exists():
            #add new category
            newcat = Category()
            newcat.title = prod['category']
            newcat.save()
        
        dbprod = Product()
        dbprod.name = prod['name']
        dbprod.price = prod['price']
        dbprod.filename = prod['filename']
        dbprod.description = prod['description']
        dbprod.category = Category.objects.get(title=prod['category'])
        dbprod.save()
        print(prod['category'])

# bootstrap
if __name__ == '__main__':
    main()
