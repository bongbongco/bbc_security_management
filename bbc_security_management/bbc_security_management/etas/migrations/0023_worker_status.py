# Generated by Django 2.0.3 on 2018-04-09 02:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('etas', '0022_auto_20180409_1108'),
    ]

    operations = [
        migrations.AddField(
            model_name='worker',
            name='status',
            field=models.CharField(max_length=80, null=True, verbose_name='상태'),
        ),
    ]
