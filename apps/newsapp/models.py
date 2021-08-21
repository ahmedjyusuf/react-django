from django.db import models
from datetime import date
# Create your models here.
# Clos
class Articles(models.Model):
    title = models.CharField(max_length=255)
    short_description = models.TextField(blank=True, null=True) 
    long_description = models.TextField()
    published_date = models.DateField(default=date.today)
 