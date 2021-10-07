from django.db.models import fields
from django.utils.timezone import now
from rest_framework import serializers
from .models import Job



class JobSerializer(serializers.ModelSerializer):
    time_since = serializers.SerializerMethodField()
    class Meta:
        model = Job
        fields = '__all__'

    def get_time_since(self, obj):
        return (now() - obj.created_date).days

        


