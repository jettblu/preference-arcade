# Generated by Django 4.1 on 2023-12-03 05:32

from django.db import migrations, models
import human_prefs.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comparison',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='date created')),
                ('updated_at', models.DateTimeField(auto_now=True, db_index=True)),
                ('media_url_1', models.TextField(db_index=True, verbose_name='media url #1')),
                ('media_url_2', models.TextField(db_index=True, verbose_name='media url #2')),
                ('shown_to_tasker_at', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='time shown to tasker')),
                ('responded_at', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='time response received')),
                ('response_kind', models.TextField(db_index=True, validators=[human_prefs.models.validate_inclusion_of_response_kind], verbose_name='the response from the tasker')),
                ('response', models.TextField(blank=True, db_index=True, null=True, verbose_name='the response from the tasker')),
                ('experiment_name', models.TextField(verbose_name='name of experiment')),
                ('priority', models.FloatField(db_index=True, verbose_name='site will display higher priority items first')),
                ('note', models.TextField(blank=True, default='', verbose_name='note to be displayed along with the query')),
            ],
        ),
    ]
