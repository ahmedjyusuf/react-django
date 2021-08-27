from django.contrib import admin
from .models import Job
# Register your models here.

class JobAdmin(admin.ModelAdmin):
    list_display = ('title', 'short_description', 'created_date')
admin.site.register(Job, JobAdmin)
