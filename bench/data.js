window.BENCHMARK_DATA = {
  "lastUpdate": 1676918211647,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "90d3a30fd66333f97a7676ca51688cdafa71375b",
          "message": "ci(snowflake): don't set the random seed for snowflake tests",
          "timestamp": "2023-02-20T13:31:06-05:00",
          "tree_id": "695bd0c1fed07f5603218e28dbae71f5c566f465",
          "url": "https://github.com/ibis-project/ibis/commit/90d3a30fd66333f97a7676ca51688cdafa71375b"
        },
        "date": 1676918128051,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 72.86431919987946,
            "unit": "iter/sec",
            "range": "stddev: 0.0004817475728977329",
            "extra": "mean: 13.724138384616298 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56522.33154428399,
            "unit": "iter/sec",
            "range": "stddev: 6.448808748732261e-7",
            "extra": "mean: 17.692122258200236 usec\nrounds: 13406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.69420033873882,
            "unit": "iter/sec",
            "range": "stddev: 0.0002599206565408452",
            "extra": "mean: 17.638488487802267 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 112.97505565525792,
            "unit": "iter/sec",
            "range": "stddev: 0.00007675694087602176",
            "extra": "mean: 8.85151146153438 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9174.639247768631,
            "unit": "iter/sec",
            "range": "stddev: 0.000012987797054407425",
            "extra": "mean: 108.99611123600425 usec\nrounds: 5340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7368914912034288,
            "unit": "iter/sec",
            "range": "stddev: 0.001999278706075694",
            "extra": "mean: 1.3570519024000192 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.872672069711507,
            "unit": "iter/sec",
            "range": "stddev: 0.0018024653026093283",
            "extra": "mean: 205.22620560000178 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 254.16206450664387,
            "unit": "iter/sec",
            "range": "stddev: 0.0002159167006732427",
            "extra": "mean: 3.9344974708995557 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.79534551265037,
            "unit": "iter/sec",
            "range": "stddev: 0.0005077480908073966",
            "extra": "mean: 27.936593031252954 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 441.08152321765465,
            "unit": "iter/sec",
            "range": "stddev: 0.000026742512418916752",
            "extra": "mean: 2.2671545901652816 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 70.3046685432604,
            "unit": "iter/sec",
            "range": "stddev: 0.000387751829505567",
            "extra": "mean: 14.223806480001713 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 327.6934136120169,
            "unit": "iter/sec",
            "range": "stddev: 0.000033844903916391454",
            "extra": "mean: 3.0516328936167816 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 88.45547757355182,
            "unit": "iter/sec",
            "range": "stddev: 0.0005407077282963994",
            "extra": "mean: 11.305122389605412 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.57698017337157,
            "unit": "iter/sec",
            "range": "stddev: 0.00019080295814146036",
            "extra": "mean: 10.144356200009952 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1459.6322274362053,
            "unit": "iter/sec",
            "range": "stddev: 0.000009146894637874005",
            "extra": "mean: 685.1040838941095 usec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 234.47683911207545,
            "unit": "iter/sec",
            "range": "stddev: 0.006305145198614576",
            "extra": "mean: 4.264813547414033 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 88.7120072762116,
            "unit": "iter/sec",
            "range": "stddev: 0.0004872412045851421",
            "extra": "mean: 11.27243121538693 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4309588.491886928,
            "unit": "iter/sec",
            "range": "stddev: 1.1874221601342634e-8",
            "extra": "mean: 232.04071615724467 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1405333.7166279077,
            "unit": "iter/sec",
            "range": "stddev: 1.1180710756260175e-7",
            "extra": "mean: 711.5747584847645 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 69.17377024362898,
            "unit": "iter/sec",
            "range": "stddev: 0.00020619619707176628",
            "extra": "mean: 14.456346624999838 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 276.3359529585054,
            "unit": "iter/sec",
            "range": "stddev: 0.00009139481919267524",
            "extra": "mean: 3.6187835469608975 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10104.967467080754,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027560374467190772",
            "extra": "mean: 98.96122904479692 usec\nrounds: 5619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120804.50687397506,
            "unit": "iter/sec",
            "range": "stddev: 3.9962802146551e-7",
            "extra": "mean: 8.27783686119603 usec\nrounds: 34014"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 70.82298903665814,
            "unit": "iter/sec",
            "range": "stddev: 0.0004915646312626216",
            "extra": "mean: 14.119709060604567 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.55949106497434,
            "unit": "iter/sec",
            "range": "stddev: 0.0002273671548290047",
            "extra": "mean: 22.957109358977064 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.57192470612712,
            "unit": "iter/sec",
            "range": "stddev: 0.00014438077778520912",
            "extra": "mean: 13.779433355934843 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 73.11925249692577,
            "unit": "iter/sec",
            "range": "stddev: 0.0005790929491981471",
            "extra": "mean: 13.676288608695009 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 72.21988313341608,
            "unit": "iter/sec",
            "range": "stddev: 0.0005722424560432277",
            "extra": "mean: 13.846602301372332 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5593704905909649,
            "unit": "iter/sec",
            "range": "stddev: 0.0023044426856121156",
            "extra": "mean: 641.2844196000037 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4513.0756580534335,
            "unit": "iter/sec",
            "range": "stddev: 0.000046834531561673034",
            "extra": "mean: 221.57838152248416 usec\nrounds: 1840"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4447.69978306601,
            "unit": "iter/sec",
            "range": "stddev: 0.00004862513959979174",
            "extra": "mean: 224.83531910300215 usec\nrounds: 2811"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10915.759258224467,
            "unit": "iter/sec",
            "range": "stddev: 0.00000189692380507597",
            "extra": "mean: 91.61066824064952 usec\nrounds: 2541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.855288055413055,
            "unit": "iter/sec",
            "range": "stddev: 0.024436162349256805",
            "extra": "mean: 34.65569285184823 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.81981907513958,
            "unit": "iter/sec",
            "range": "stddev: 0.00003300765336449931",
            "extra": "mean: 5.786373376338361 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 87.04789283043155,
            "unit": "iter/sec",
            "range": "stddev: 0.0006438886842115612",
            "extra": "mean: 11.487928857140636 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 82.16516535415597,
            "unit": "iter/sec",
            "range": "stddev: 0.0005958870411405749",
            "extra": "mean: 12.17060777142852 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 258.899450204082,
            "unit": "iter/sec",
            "range": "stddev: 0.0002020039992151795",
            "extra": "mean: 3.862503374231705 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12768990.378288953,
            "unit": "iter/sec",
            "range": "stddev: 3.0573004230979556e-9",
            "extra": "mean: 78.31472734912079 nsec\nrounds: 123473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1379547.5607806807,
            "unit": "iter/sec",
            "range": "stddev: 1.0060056559907845e-7",
            "extra": "mean: 724.8753348047703 nsec\nrounds: 135154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8513390648811741,
            "unit": "iter/sec",
            "range": "stddev: 0.00574081760372163",
            "extra": "mean: 1.1746201264000207 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4303.193403155257,
            "unit": "iter/sec",
            "range": "stddev: 0.00008976088778205307",
            "extra": "mean: 232.38555795952928 usec\nrounds: 1803"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 85.7525358954481,
            "unit": "iter/sec",
            "range": "stddev: 0.00046483551779454794",
            "extra": "mean: 11.661462714283203 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.493637193154324,
            "unit": "iter/sec",
            "range": "stddev: 0.00043272813988540367",
            "extra": "mean: 37.74491183333595 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 250.5646331518774,
            "unit": "iter/sec",
            "range": "stddev: 0.000190918566639216",
            "extra": "mean: 3.990986227469139 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 87.68641199519858,
            "unit": "iter/sec",
            "range": "stddev: 0.0005832895960988324",
            "extra": "mean: 11.404275500002859 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1523072415478499,
            "unit": "iter/sec",
            "range": "stddev: 0.06298415632958339",
            "extra": "mean: 6.565675997000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 120.30730309721517,
            "unit": "iter/sec",
            "range": "stddev: 0.000036846660824894086",
            "extra": "mean: 8.312047350873979 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 567105.734432399,
            "unit": "iter/sec",
            "range": "stddev: 1.7879640203031876e-7",
            "extra": "mean: 1.7633396019189846 usec\nrounds: 22173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5561726.037990312,
            "unit": "iter/sec",
            "range": "stddev: 4.683283284180553e-9",
            "extra": "mean: 179.80029817532483 nsec\nrounds: 51547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.687270519405661,
            "unit": "iter/sec",
            "range": "stddev: 0.0007392099028387105",
            "extra": "mean: 73.06058564285779 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3038.086763196622,
            "unit": "iter/sec",
            "range": "stddev: 0.0031207996739636805",
            "extra": "mean: 329.1545232065122 usec\nrounds: 1659"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 234.41268599820262,
            "unit": "iter/sec",
            "range": "stddev: 0.0001224845013659105",
            "extra": "mean: 4.265980724301191 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2218619260797823,
            "unit": "iter/sec",
            "range": "stddev: 0.0011940448191439742",
            "extra": "mean: 450.07297180000023 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.36604699559338,
            "unit": "iter/sec",
            "range": "stddev: 0.0006477706411519031",
            "extra": "mean: 16.844645224133384 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.5802507982458,
            "unit": "iter/sec",
            "range": "stddev: 0.00005888469767394626",
            "extra": "mean: 6.916573975206669 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6406.41729600442,
            "unit": "iter/sec",
            "range": "stddev: 0.000012259232599901873",
            "extra": "mean: 156.0934846725773 usec\nrounds: 3262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4091.013543075015,
            "unit": "iter/sec",
            "range": "stddev: 0.00004495526204761237",
            "extra": "mean: 244.43820326450174 usec\nrounds: 2022"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 84.28629166420772,
            "unit": "iter/sec",
            "range": "stddev: 0.0005959561592476133",
            "extra": "mean: 11.864325506025924 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 626.5496536605297,
            "unit": "iter/sec",
            "range": "stddev: 0.000011527345594275318",
            "extra": "mean: 1.596042698543744 msec\nrounds: 481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.9321838919681,
            "unit": "iter/sec",
            "range": "stddev: 0.0005922835625457294",
            "extra": "mean: 11.503219581400542 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 100.42853547205839,
            "unit": "iter/sec",
            "range": "stddev: 0.00023190154866128493",
            "extra": "mean: 9.957329311829145 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8480592742901968,
            "unit": "iter/sec",
            "range": "stddev: 0.0032680231635993616",
            "extra": "mean: 1.1791628607999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 390206.4051731198,
            "unit": "iter/sec",
            "range": "stddev: 6.701113226979193e-7",
            "extra": "mean: 2.5627462459421646 usec\nrounds: 666"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 60.69085036296877,
            "unit": "iter/sec",
            "range": "stddev: 0.01665160046191048",
            "extra": "mean: 16.476948238810007 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 79.43278039064661,
            "unit": "iter/sec",
            "range": "stddev: 0.00007971906325612434",
            "extra": "mean: 12.589260945947604 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.22078899693325,
            "unit": "iter/sec",
            "range": "stddev: 0.00014966982628832585",
            "extra": "mean: 10.613368988372073 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1576886.36536628,
            "unit": "iter/sec",
            "range": "stddev: 1.2299447636739493e-7",
            "extra": "mean: 634.1611050506607 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 558.4920099850598,
            "unit": "iter/sec",
            "range": "stddev: 0.00009342019711991418",
            "extra": "mean: 1.7905359112062338 msec\nrounds: 473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 65.4352052587092,
            "unit": "iter/sec",
            "range": "stddev: 0.000618901874806954",
            "extra": "mean: 15.282293316668452 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4469614.156365644,
            "unit": "iter/sec",
            "range": "stddev: 2.4727199828224274e-8",
            "extra": "mean: 223.73295882264733 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4346.946021106237,
            "unit": "iter/sec",
            "range": "stddev: 0.00008714247164299885",
            "extra": "mean: 230.04656490892287 usec\nrounds: 1972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 971.9173333478442,
            "unit": "iter/sec",
            "range": "stddev: 0.000011236052254747313",
            "extra": "mean: 1.028894089742615 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.5232667677118,
            "unit": "iter/sec",
            "range": "stddev: 0.00002329022506915317",
            "extra": "mean: 3.7520176460674612 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1415259.0329397758,
            "unit": "iter/sec",
            "range": "stddev: 9.182147667482337e-8",
            "extra": "mean: 706.584432054675 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 84.19612210518778,
            "unit": "iter/sec",
            "range": "stddev: 0.00016881825639432281",
            "extra": "mean: 11.87703156626004 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 228.9660723405872,
            "unit": "iter/sec",
            "range": "stddev: 0.009033117250876674",
            "extra": "mean: 4.367459291141175 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4422.33795656164,
            "unit": "iter/sec",
            "range": "stddev: 0.00005221309314561555",
            "extra": "mean: 226.12473533739114 usec\nrounds: 2796"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.582413719813954,
            "unit": "iter/sec",
            "range": "stddev: 0.0017490976986827592",
            "extra": "mean: 1.7169925191999937 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.73888385236091,
            "unit": "iter/sec",
            "range": "stddev: 0.000956764643780869",
            "extra": "mean: 24.546573333330237 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3989.213210970818,
            "unit": "iter/sec",
            "range": "stddev: 0.00004896184991064459",
            "extra": "mean: 250.67599727431946 usec\nrounds: 1835"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 260.9275491383155,
            "unit": "iter/sec",
            "range": "stddev: 0.00020531721024553756",
            "extra": "mean: 3.8324814811712673 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.07086817040696,
            "unit": "iter/sec",
            "range": "stddev: 0.0003210445490329551",
            "extra": "mean: 110.2430308999999 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}