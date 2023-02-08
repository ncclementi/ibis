window.BENCHMARK_DATA = {
  "lastUpdate": 1675863370150,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "3e7bfa358ca929d0bd3dee2a2ec4470af303bfe8",
          "message": "refactor(common): move the `geospatial` module to the base SQL backend\n\nit contains routines to compile geospatial values as SQL\n\nBREAKING CHANGE: removed `ibis.common.geospatial`, import the functions from `ibis.backends.base.sql.registry.geospatial`",
          "timestamp": "2023-02-08T08:29:17-05:00",
          "tree_id": "81940d3077d9085bdafa6616991e95c3dcf9ec9c",
          "url": "https://github.com/ibis-project/ibis/commit/3e7bfa358ca929d0bd3dee2a2ec4470af303bfe8"
        },
        "date": 1675863289220,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1473678.421338951,
            "unit": "iter/sec",
            "range": "stddev: 1.0351429298996161e-7",
            "extra": "mean: 678.5740942663886 nsec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 577033.8758070677,
            "unit": "iter/sec",
            "range": "stddev: 3.8432424094954005e-7",
            "extra": "mean: 1.7330005081614164 usec\nrounds: 21645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19320.803473095522,
            "unit": "iter/sec",
            "range": "stddev: 0.000014257288526823867",
            "extra": "mean: 51.75768188898114 usec\nrounds: 4489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 162.91836296901218,
            "unit": "iter/sec",
            "range": "stddev: 0.0005615653441544717",
            "extra": "mean: 6.138043507042878 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6071.108527211774,
            "unit": "iter/sec",
            "range": "stddev: 0.00005191595377034138",
            "extra": "mean: 164.71456497900252 usec\nrounds: 3832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 528.8885805820978,
            "unit": "iter/sec",
            "range": "stddev: 0.000020663981577779424",
            "extra": "mean: 1.8907574047059104 msec\nrounds: 425"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 258.7581416215235,
            "unit": "iter/sec",
            "range": "stddev: 0.00017981121230575546",
            "extra": "mean: 3.864612698690134 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 329.48240208471964,
            "unit": "iter/sec",
            "range": "stddev: 0.00005815276749716913",
            "extra": "mean: 3.035063462184152 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 228.30001391868842,
            "unit": "iter/sec",
            "range": "stddev: 0.0003209545936220461",
            "extra": "mean: 4.380201222222269 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4835909.317442589,
            "unit": "iter/sec",
            "range": "stddev: 5.36627419642608e-9",
            "extra": "mean: 206.78634241410938 nsec\nrounds: 49262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.49268105283437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000796382673530254",
            "extra": "mean: 8.163753061855779 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.27514349787346,
            "unit": "iter/sec",
            "range": "stddev: 0.002996522030194232",
            "extra": "mean: 439.5327155999979 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 150.56908920170818,
            "unit": "iter/sec",
            "range": "stddev: 0.0005870185426931846",
            "extra": "mean: 6.641469409835915 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8787628855677748,
            "unit": "iter/sec",
            "range": "stddev: 0.0017297802775419415",
            "extra": "mean: 1.1379633987999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1988093.981551686,
            "unit": "iter/sec",
            "range": "stddev: 2.792606435023289e-8",
            "extra": "mean: 502.99432988551814 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.882221680461477,
            "unit": "iter/sec",
            "range": "stddev: 0.015465097548573165",
            "extra": "mean: 31.365442785715103 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4399157.893683744,
            "unit": "iter/sec",
            "range": "stddev: 1.2434186647839859e-8",
            "extra": "mean: 227.3162328266325 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56169.72697313763,
            "unit": "iter/sec",
            "range": "stddev: 0.0000122191180331158",
            "extra": "mean: 17.803184275370175 usec\nrounds: 11765"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.794279072384,
            "unit": "iter/sec",
            "range": "stddev: 0.000019332000734260885",
            "extra": "mean: 3.7765166358697675 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10305.833146126608,
            "unit": "iter/sec",
            "range": "stddev: 0.000001932744704023037",
            "extra": "mean: 97.03242676462742 usec\nrounds: 4902"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5763.165865491181,
            "unit": "iter/sec",
            "range": "stddev: 0.00007335369399711596",
            "extra": "mean: 173.5157417536468 usec\nrounds: 2304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.617577578850586,
            "unit": "iter/sec",
            "range": "stddev: 0.0005466088614673491",
            "extra": "mean: 26.583317277777653 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.60199905477951,
            "unit": "iter/sec",
            "range": "stddev: 0.00008024648386016793",
            "extra": "mean: 13.773725421051864 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.51013782163658,
            "unit": "iter/sec",
            "range": "stddev: 0.0005160648215644789",
            "extra": "mean: 11.17191889473639 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 252.4617142289862,
            "unit": "iter/sec",
            "range": "stddev: 0.00020703842707153823",
            "extra": "mean: 3.960996632911184 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 257.1440991113231,
            "unit": "iter/sec",
            "range": "stddev: 0.00019710610627096567",
            "extra": "mean: 3.8888701061231776 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1510333.56673306,
            "unit": "iter/sec",
            "range": "stddev: 1.7199730598842246e-7",
            "extra": "mean: 662.1053931569955 nsec\nrounds: 181786"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.22400232289344,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852048568234414",
            "extra": "mean: 14.657597999999439 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 84.46078755162742,
            "unit": "iter/sec",
            "range": "stddev: 0.011282348776038327",
            "extra": "mean: 11.839813823530132 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.884484784550374,
            "unit": "iter/sec",
            "range": "stddev: 0.0001510214626486409",
            "extra": "mean: 21.329017575757284 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5196.219069452669,
            "unit": "iter/sec",
            "range": "stddev: 0.0000514201476861402",
            "extra": "mean: 192.44762136353356 usec\nrounds: 2303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 118886.35119637517,
            "unit": "iter/sec",
            "range": "stddev: 3.319940675048233e-7",
            "extra": "mean: 8.41139449513604 usec\nrounds: 35714"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 83.50279048566358,
            "unit": "iter/sec",
            "range": "stddev: 0.0005662052328754485",
            "extra": "mean: 11.97564769014142 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.26463996656163,
            "unit": "iter/sec",
            "range": "stddev: 0.00003413139822645033",
            "extra": "mean: 10.388030333332766 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4540.272471187081,
            "unit": "iter/sec",
            "range": "stddev: 0.000020916966982124325",
            "extra": "mean: 220.25109866116563 usec\nrounds: 1419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5771424413509753,
            "unit": "iter/sec",
            "range": "stddev: 0.03870061964161643",
            "extra": "mean: 1.7326745155999959 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.65201107631785,
            "unit": "iter/sec",
            "range": "stddev: 0.0006701890461753165",
            "extra": "mean: 11.154239464285217 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 378573.9673853668,
            "unit": "iter/sec",
            "range": "stddev: 9.185555656619116e-8",
            "extra": "mean: 2.641491719323788 usec\nrounds: 1932"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8748766983557704,
            "unit": "iter/sec",
            "range": "stddev: 0.0026514320672725283",
            "extra": "mean: 1.1430182125999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.77104666252484,
            "unit": "iter/sec",
            "range": "stddev: 0.00016533502330915768",
            "extra": "mean: 7.00422125757578 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.31849051390256,
            "unit": "iter/sec",
            "range": "stddev: 0.00002795701356914996",
            "extra": "mean: 5.803207752213455 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10954.268067601037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014899049086829346",
            "extra": "mean: 91.28861863054608 usec\nrounds: 5711"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.79598537663352,
            "unit": "iter/sec",
            "range": "stddev: 0.00009205176510724647",
            "extra": "mean: 7.002997999995841 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 145.73260354105415,
            "unit": "iter/sec",
            "range": "stddev: 0.008224996807755196",
            "extra": "mean: 6.861882486840299 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 158.98194738859348,
            "unit": "iter/sec",
            "range": "stddev: 0.0006604656995243136",
            "extra": "mean: 6.29002233540226 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5865528768816268,
            "unit": "iter/sec",
            "range": "stddev: 0.0018605969400626917",
            "extra": "mean: 630.297303399999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.85408174718921,
            "unit": "iter/sec",
            "range": "stddev: 0.00012050967394276273",
            "extra": "mean: 9.62889453333465 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5319402.262161477,
            "unit": "iter/sec",
            "range": "stddev: 4.590877655891229e-9",
            "extra": "mean: 187.9910468725701 nsec\nrounds: 51544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.893937236588082,
            "unit": "iter/sec",
            "range": "stddev: 0.0011439893118559469",
            "extra": "mean: 204.33445539999866 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11411388.821461316,
            "unit": "iter/sec",
            "range": "stddev: 9.866221685913122e-9",
            "extra": "mean: 87.63175242262335 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.197691789937856,
            "unit": "iter/sec",
            "range": "stddev: 0.0002728954196447808",
            "extra": "mean: 22.62561594285931 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1463.3852440131702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057705801556510545",
            "extra": "mean: 683.3470571683584 usec\nrounds: 1137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.15352823990017,
            "unit": "iter/sec",
            "range": "stddev: 0.0006116520934796498",
            "extra": "mean: 10.509331797753307 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 418.2265357751897,
            "unit": "iter/sec",
            "range": "stddev: 0.00009718068207917514",
            "extra": "mean: 2.391048664921473 msec\nrounds: 382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.096317724675277,
            "unit": "iter/sec",
            "range": "stddev: 0.00020917256995301874",
            "extra": "mean: 109.93459444444574 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1575462.4613339622,
            "unit": "iter/sec",
            "range": "stddev: 9.60446524286139e-8",
            "extra": "mean: 634.7342602839858 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7538183067100853,
            "unit": "iter/sec",
            "range": "stddev: 0.0016726684345958107",
            "extra": "mean: 1.3265796162000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.17192616850316,
            "unit": "iter/sec",
            "range": "stddev: 0.00008443550465804521",
            "extra": "mean: 17.190422698113167 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.036197120524257,
            "unit": "iter/sec",
            "range": "stddev: 0.0002973101400689187",
            "extra": "mean: 36.98745039999949 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 143.89455269042617,
            "unit": "iter/sec",
            "range": "stddev: 0.008836765957145222",
            "extra": "mean: 6.9495333999987725 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.55830015678768,
            "unit": "iter/sec",
            "range": "stddev: 0.0006503641287640817",
            "extra": "mean: 10.804001351646106 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.80076884177491,
            "unit": "iter/sec",
            "range": "stddev: 0.00021247406166025005",
            "extra": "mean: 11.38942190588436 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.62984351312282,
            "unit": "iter/sec",
            "range": "stddev: 0.00009719679528225368",
            "extra": "mean: 14.786371637928765 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.486853298147855,
            "unit": "iter/sec",
            "range": "stddev: 0.00013093726146479396",
            "extra": "mean: 74.14627992856789 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 612.0300532565433,
            "unit": "iter/sec",
            "range": "stddev: 0.000011336902576845877",
            "extra": "mean: 1.6339066924558885 msec\nrounds: 517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 158.42434910984184,
            "unit": "iter/sec",
            "range": "stddev: 0.0006464738880017222",
            "extra": "mean: 6.312161013245891 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.80002686066295,
            "unit": "iter/sec",
            "range": "stddev: 0.0006057537731025236",
            "extra": "mean: 10.893243000002954 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5165.405013851491,
            "unit": "iter/sec",
            "range": "stddev: 0.00005042017675285634",
            "extra": "mean: 193.59566138926405 usec\nrounds: 3095"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 253.78617020050262,
            "unit": "iter/sec",
            "range": "stddev: 0.00019382707213891307",
            "extra": "mean: 3.94032503508743 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 250.11413342619613,
            "unit": "iter/sec",
            "range": "stddev: 0.00009534742426606395",
            "extra": "mean: 3.9981746984925217 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.51214213956892,
            "unit": "iter/sec",
            "range": "stddev: 0.00004641158846660066",
            "extra": "mean: 9.85103829870028 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 255.04649256859602,
            "unit": "iter/sec",
            "range": "stddev: 0.00019520647057957467",
            "extra": "mean: 3.9208537624999686 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 272.287417257128,
            "unit": "iter/sec",
            "range": "stddev: 0.00009532313678620015",
            "extra": "mean: 3.672589831999744 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 141.88893461943294,
            "unit": "iter/sec",
            "range": "stddev: 0.00025334507552876595",
            "extra": "mean: 7.047765935251735 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 970.7935640869653,
            "unit": "iter/sec",
            "range": "stddev: 0.000011464599679852519",
            "extra": "mean: 1.030085114893096 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6014.708421686175,
            "unit": "iter/sec",
            "range": "stddev: 0.00004601037133948707",
            "extra": "mean: 166.25909851165454 usec\nrounds: 2284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5141.755680329579,
            "unit": "iter/sec",
            "range": "stddev: 0.000049015032422916075",
            "extra": "mean: 194.48609816791244 usec\nrounds: 2292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9722.266584616453,
            "unit": "iter/sec",
            "range": "stddev: 0.000012703363887245059",
            "extra": "mean: 102.85667352326057 usec\nrounds: 4910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 245.97064141889211,
            "unit": "iter/sec",
            "range": "stddev: 0.00018940735876513704",
            "extra": "mean: 4.065525845814189 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6043.76882881717,
            "unit": "iter/sec",
            "range": "stddev: 0.000047328014692093575",
            "extra": "mean: 165.45967066640944 usec\nrounds: 3583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.24726975881467,
            "unit": "iter/sec",
            "range": "stddev: 0.0006370464648628065",
            "extra": "mean: 6.932540225350727 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1545899899009132,
            "unit": "iter/sec",
            "range": "stddev: 0.08138306875284752",
            "extra": "mean: 6.468724143400005 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}