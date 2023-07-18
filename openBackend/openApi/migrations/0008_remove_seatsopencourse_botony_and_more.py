# Generated by Django 4.2.1 on 2023-06-26 10:35

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("openApi", "0007_remove_seatsopencourse_malayalam_seatsopencourse_mal"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="seatsopencourse",
            name="botony",
        ),
        migrations.RemoveField(
            model_name="seatsopencourse",
            name="chemistry",
        ),
        migrations.RemoveField(
            model_name="seatsopencourse",
            name="commerce",
        ),
        migrations.RemoveField(
            model_name="seatsopencourse",
            name="cs",
        ),
        migrations.RemoveField(
            model_name="seatsopencourse",
            name="economics",
        ),
        migrations.RemoveField(
            model_name="seatsopencourse",
            name="english",
        ),
        migrations.RemoveField(
            model_name="seatsopencourse",
            name="hindi",
        ),
        migrations.RemoveField(
            model_name="seatsopencourse",
            name="pe",
        ),
        migrations.RemoveField(
            model_name="seatsopencourse",
            name="physics",
        ),
        migrations.RemoveField(
            model_name="seatsopencourse",
            name="politics",
        ),
        migrations.RemoveField(
            model_name="seatsopencourse",
            name="sanskrit",
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="BOT",
            field=models.IntegerField(blank=True, null=True, verbose_name="Botany"),
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="CHE",
            field=models.IntegerField(blank=True, null=True, verbose_name="Chemistry"),
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="COM",
            field=models.IntegerField(blank=True, null=True, verbose_name="Commerce"),
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="CSC",
            field=models.IntegerField(
                blank=True, null=True, verbose_name="Computer Science"
            ),
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="ECO",
            field=models.IntegerField(blank=True, null=True, verbose_name="Economics"),
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="ENG",
            field=models.IntegerField(blank=True, null=True, verbose_name="English"),
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="HIS",
            field=models.IntegerField(blank=True, null=True, verbose_name="History"),
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="MAT",
            field=models.IntegerField(blank=True, null=True, verbose_name="Maths"),
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="PED",
            field=models.IntegerField(
                blank=True, null=True, verbose_name="Physical Education"
            ),
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="PHY",
            field=models.IntegerField(blank=True, null=True, verbose_name="Physics"),
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="POL",
            field=models.IntegerField(blank=True, null=True, verbose_name="Politics"),
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="SKT",
            field=models.IntegerField(blank=True, null=True, verbose_name="Sanskrit"),
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="STA",
            field=models.IntegerField(blank=True, null=True, verbose_name="Statistics"),
        ),
        migrations.AddField(
            model_name="seatsopencourse",
            name="ZLG",
            field=models.IntegerField(blank=True, null=True, verbose_name="Zoology"),
        ),
    ]
