from api.fields import JSONField
from django.db import models

# Create your models here.
class Campaign(models.Model):
    title = models.TextField()

class Donation(models.Model):
    title = models.TextField()
    # category = models.ForeignKey(Category, on_delete=models.PROTECT)
    # name = models.TextField()
    # description = models.TextField()
    # filename = models.TextField()
    # price = models.DecimalField(max_digits=10, decimal_places=2)

class Update(models.Model):
    title = models.TextField()
    # name = models.TextField()
    # address1 = models.TextField()
    # address2 = models.TextField(null=True, blank=True)
    # city = models.TextField()
    # state = models.TextField()
    # zipcode = models.TextField()
    # total = models.DecimalField(max_digits=10, decimal_places=2)
    # items = JSONField(default=dict)
    # payment_intent = JSONField(default=dict)