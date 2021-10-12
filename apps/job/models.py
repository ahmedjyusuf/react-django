from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone
from ckeditor.fields import RichTextField

# Create your models here.
class Job(models.Model):

    FULL_TIME = 'full time'
    PART_TIME = 'part time'
    CONTRACT  = 'contract'
    REMOTE    = 'remote'

    CHOICES_JOB_TYPE = (
        (FULL_TIME, 'Full time'),
        (PART_TIME, 'Part Time'),
        (CONTRACT, 'Contract'),
        (REMOTE, 'Remote')
    )


    PUBLISHED = 'published'
    DRAFT     = 'draft'
    ARCHIVED  = 'archived'

    CHOICES_STATUS = (
        (DRAFT, 'Draft'),
        (PUBLISHED, 'Published'),
        (ARCHIVED, 'Archived')
    )

    title = models.CharField(max_length=255)
    short_description = models.TextField(blank=True, null=True)
    long_description = RichTextField(blank=True, null=True)

    company_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    zipcode = models.CharField(max_length=255, blank=True, null=True)
    

    created_by = models.ForeignKey(User, related_name='jobs', on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    published = models.CharField(max_length=20, choices=CHOICES_STATUS, default=DRAFT)
    job_type   = models.CharField(max_length=30, choices=CHOICES_JOB_TYPE, default=FULL_TIME)
    photo = models.ImageField(upload_to='uploads/', blank=True, null=True)
    

    def __str__(self):
        return self.title