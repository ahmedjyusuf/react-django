# Generated by Django 3.2.6 on 2021-08-27 07:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job', '0002_alter_job_long_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='photo',
            field=models.ImageField(default='blanl', upload_to='uploads/'),
            preserve_default=False,
        ),
    ]