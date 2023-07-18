# Generated by Django 4.2.1 on 2023-06-26 10:21

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("openApi", "0005_seatsopencourse"),
    ]

    operations = [
        migrations.AlterField(
            model_name="seatsopencourse",
            name="id",
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AddConstraint(
            model_name="seatsopencourse",
            constraint=models.UniqueConstraint(
                fields=("id",), name="unique_seats_open_course"
            ),
        ),
    ]
