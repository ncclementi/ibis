window.BENCHMARK_DATA = {
  "lastUpdate": 1680691814369,
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
          "id": "523e1981732ca4c36c2c4c6be0a7e871c566dcb7",
          "message": "refactor(sqlalchemy): remove unused `_meta` instance attributes",
          "timestamp": "2023-04-05T06:39:28-04:00",
          "tree_id": "4109ee704c334313007284650789f3a716f2f4af",
          "url": "https://github.com/ibis-project/ibis/commit/523e1981732ca4c36c2c4c6be0a7e871c566dcb7"
        },
        "date": 1680691731897,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 1936772.7358904858,
            "unit": "iter/sec",
            "range": "stddev: 0.00003720639872872699",
            "extra": "mean: 516.3228402945387 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6073452266850845,
            "unit": "iter/sec",
            "range": "stddev: 0.010976710970559425",
            "extra": "mean: 1.6465100177999943 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 105.22911904389117,
            "unit": "iter/sec",
            "range": "stddev: 0.000655560636205212",
            "extra": "mean: 9.503073000002015 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 98.11251908786811,
            "unit": "iter/sec",
            "range": "stddev: 0.007861303420920519",
            "extra": "mean: 10.19237921212088 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 107.60993976343023,
            "unit": "iter/sec",
            "range": "stddev: 0.0012127639430545593",
            "extra": "mean: 9.292821854546158 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.698009215723946,
            "unit": "iter/sec",
            "range": "stddev: 0.0025314628045019936",
            "extra": "mean: 44.05672719998961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.21631623902746,
            "unit": "iter/sec",
            "range": "stddev: 0.001068294163017481",
            "extra": "mean: 11.208712062497739 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 252.26832245381252,
            "unit": "iter/sec",
            "range": "stddev: 0.0006838161572911149",
            "extra": "mean: 3.964033178137492 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 469.2926672003473,
            "unit": "iter/sec",
            "range": "stddev: 0.00024311977582451254",
            "extra": "mean: 2.1308664504938593 msec\nrounds: 404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3998.273826341627,
            "unit": "iter/sec",
            "range": "stddev: 0.00011584171978292742",
            "extra": "mean: 250.10793243117823 usec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 127.01757133675,
            "unit": "iter/sec",
            "range": "stddev: 0.0007146326496014375",
            "extra": "mean: 7.872926473682857 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1050.697490152979,
            "unit": "iter/sec",
            "range": "stddev: 0.00044820445307060453",
            "extra": "mean: 951.7487282228135 usec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.07942038277483,
            "unit": "iter/sec",
            "range": "stddev: 0.00128377102463472",
            "extra": "mean: 10.62931718681264 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 228.88539217456588,
            "unit": "iter/sec",
            "range": "stddev: 0.001035394773539094",
            "extra": "mean: 4.368998783624085 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 90.27091007544402,
            "unit": "iter/sec",
            "range": "stddev: 0.011663510290498863",
            "extra": "mean: 11.077765795916411 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2198058898686546,
            "unit": "iter/sec",
            "range": "stddev: 0.02025351717607255",
            "extra": "mean: 819.8025671999972 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1788460.3061119977,
            "unit": "iter/sec",
            "range": "stddev: 0.000001261048823965722",
            "extra": "mean: 559.1401702249341 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 103.02238746082145,
            "unit": "iter/sec",
            "range": "stddev: 0.0015301352041505562",
            "extra": "mean: 9.706628089746916 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11313.058931720105,
            "unit": "iter/sec",
            "range": "stddev: 0.00007536371428898967",
            "extra": "mean: 88.39342268395255 usec\nrounds: 2257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3945.9109372456496,
            "unit": "iter/sec",
            "range": "stddev: 0.0001248491968280028",
            "extra": "mean: 253.42690595495966 usec\nrounds: 1797"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4342.328046913871,
            "unit": "iter/sec",
            "range": "stddev: 0.0000934174190259552",
            "extra": "mean: 230.29121457341492 usec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 41.66753506012321,
            "unit": "iter/sec",
            "range": "stddev: 0.0017994252361250005",
            "extra": "mean: 23.999499815793595 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 67383.48821346175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071818933012754856",
            "extra": "mean: 14.840430890608328 usec\nrounds: 14535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 250.18385792940109,
            "unit": "iter/sec",
            "range": "stddev: 0.0007118648578754595",
            "extra": "mean: 3.997060434978935 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4404.1806108687715,
            "unit": "iter/sec",
            "range": "stddev: 0.00012318079983104522",
            "extra": "mean: 227.0569916075125 usec\nrounds: 3217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.71006244752454,
            "unit": "iter/sec",
            "range": "stddev: 0.0006331332451510957",
            "extra": "mean: 7.314750517240419 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 179.13174217612038,
            "unit": "iter/sec",
            "range": "stddev: 0.012900944360562978",
            "extra": "mean: 5.582483527775947 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1470.4931900779252,
            "unit": "iter/sec",
            "range": "stddev: 0.00032047844359261226",
            "extra": "mean: 680.0439517486017 usec\nrounds: 1430"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 249.1203446125879,
            "unit": "iter/sec",
            "range": "stddev: 0.0011635226794742756",
            "extra": "mean: 4.014124183856281 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6818.125167222054,
            "unit": "iter/sec",
            "range": "stddev: 0.00005090645751282467",
            "extra": "mean: 146.6678853018821 usec\nrounds: 4429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 255.32899803768663,
            "unit": "iter/sec",
            "range": "stddev: 0.000507683634313594",
            "extra": "mean: 3.9165155845416346 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 265.03008904354726,
            "unit": "iter/sec",
            "range": "stddev: 0.0009348747706943368",
            "extra": "mean: 3.773156488038192 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 182.63306870834225,
            "unit": "iter/sec",
            "range": "stddev: 0.004145755454050216",
            "extra": "mean: 5.475459658387278 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 95.74015208902173,
            "unit": "iter/sec",
            "range": "stddev: 0.0010536342355364817",
            "extra": "mean: 10.444938494250286 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.679566408154145,
            "unit": "iter/sec",
            "range": "stddev: 0.0025150996178817256",
            "extra": "mean: 29.691593647057477 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1789425.282691591,
            "unit": "iter/sec",
            "range": "stddev: 0.000001414836634864593",
            "extra": "mean: 558.838644827816 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.75208499226756,
            "unit": "iter/sec",
            "range": "stddev: 0.004611563686110993",
            "extra": "mean: 30.5324073333374 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6378459.737044046,
            "unit": "iter/sec",
            "range": "stddev: 1.610631317401077e-7",
            "extra": "mean: 156.7776612576673 nsec\nrounds: 68028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 240.28333492551664,
            "unit": "iter/sec",
            "range": "stddev: 0.0008002410026722099",
            "extra": "mean: 4.161753457891623 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0365713122498645,
            "unit": "iter/sec",
            "range": "stddev: 0.010122878919522856",
            "extra": "mean: 491.02135240001417 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9917.994419000717,
            "unit": "iter/sec",
            "range": "stddev: 0.0000587635988250232",
            "extra": "mean: 100.82683632935081 usec\nrounds: 3226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10633452.135779684,
            "unit": "iter/sec",
            "range": "stddev: 4.3548981424856595e-7",
            "extra": "mean: 94.04283644019347 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 109.39630810325906,
            "unit": "iter/sec",
            "range": "stddev: 0.0011707473375790272",
            "extra": "mean: 9.141076306305521 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 150.0542251169136,
            "unit": "iter/sec",
            "range": "stddev: 0.0007742034178830941",
            "extra": "mean: 6.66425753237443 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.58290345967063,
            "unit": "iter/sec",
            "range": "stddev: 0.001859535668406728",
            "extra": "mean: 11.684576703701477 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5233449027554687,
            "unit": "iter/sec",
            "range": "stddev: 0.02204015926597823",
            "extra": "mean: 1.9107857833999902 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5734437.553417822,
            "unit": "iter/sec",
            "range": "stddev: 3.998419750706634e-7",
            "extra": "mean: 174.38501870248504 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5624257997969608,
            "unit": "iter/sec",
            "range": "stddev: 0.07200085981198391",
            "extra": "mean: 1.7780123180000031 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10312282679496199,
            "unit": "iter/sec",
            "range": "stddev: 0.11406864940636192",
            "extra": "mean: 9.697174050400008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 106.84774850486338,
            "unit": "iter/sec",
            "range": "stddev: 0.0011294187274057481",
            "extra": "mean: 9.359111576922775 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 309.5415384259508,
            "unit": "iter/sec",
            "range": "stddev: 0.0003528174721207604",
            "extra": "mean: 3.2305841893953824 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4285.211078917586,
            "unit": "iter/sec",
            "range": "stddev: 0.00019135299535022693",
            "extra": "mean: 233.36073336499285 usec\nrounds: 2119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 146.5708241328264,
            "unit": "iter/sec",
            "range": "stddev: 0.004169976114835979",
            "extra": "mean: 6.822640221315623 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.56035174641523,
            "unit": "iter/sec",
            "range": "stddev: 0.0022434813983541733",
            "extra": "mean: 21.47750097435619 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4024.615020484896,
            "unit": "iter/sec",
            "range": "stddev: 0.00026217683954963986",
            "extra": "mean: 248.4709704928541 usec\nrounds: 2474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 106.5483457862416,
            "unit": "iter/sec",
            "range": "stddev: 0.0007555098741528666",
            "extra": "mean: 9.385410844446243 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2396006.7384545677,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018373676062688872",
            "extra": "mean: 417.3610966739737 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 75.25152764181128,
            "unit": "iter/sec",
            "range": "stddev: 0.01971610138876083",
            "extra": "mean: 13.288766771086513 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 96.27509417973387,
            "unit": "iter/sec",
            "range": "stddev: 0.0013059691099832616",
            "extra": "mean: 10.386902329413688 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.41000526674986,
            "unit": "iter/sec",
            "range": "stddev: 0.0007370709642764795",
            "extra": "mean: 6.877105864658577 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.792686108482473,
            "unit": "iter/sec",
            "range": "stddev: 0.004484270056081748",
            "extra": "mean: 113.7308881111178 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2378282.042915728,
            "unit": "iter/sec",
            "range": "stddev: 0.000001804877464408149",
            "extra": "mean: 420.47157652247944 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12475.216943709307,
            "unit": "iter/sec",
            "range": "stddev: 0.00003189046764594289",
            "extra": "mean: 80.15892665532003 usec\nrounds: 5890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.7751645160435,
            "unit": "iter/sec",
            "range": "stddev: 0.0016707568782608423",
            "extra": "mean: 11.392744240510314 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.80595030089405,
            "unit": "iter/sec",
            "range": "stddev: 0.016861820288832645",
            "extra": "mean: 208.07539350000562 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 81.58731394016287,
            "unit": "iter/sec",
            "range": "stddev: 0.0015746277746366026",
            "extra": "mean: 12.256807482759049 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4481.44460451349,
            "unit": "iter/sec",
            "range": "stddev: 0.00010598859984668815",
            "extra": "mean: 223.1423320491007 usec\nrounds: 2334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 102.80983304214905,
            "unit": "iter/sec",
            "range": "stddev: 0.0017011603551438177",
            "extra": "mean: 9.726696079644727 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.47953725482424,
            "unit": "iter/sec",
            "range": "stddev: 0.0018054052168844058",
            "extra": "mean: 16.812504705875003 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 588.5767105763216,
            "unit": "iter/sec",
            "range": "stddev: 0.00044338621749101466",
            "extra": "mean: 1.6990138787870517 msec\nrounds: 495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 684.3106839265361,
            "unit": "iter/sec",
            "range": "stddev: 0.00030313008963543767",
            "extra": "mean: 1.46132454671328 msec\nrounds: 578"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4091.3721664264885,
            "unit": "iter/sec",
            "range": "stddev: 0.00010388191047446804",
            "extra": "mean: 244.41677738484157 usec\nrounds: 1981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141470.1117023489,
            "unit": "iter/sec",
            "range": "stddev: 0.000006900229508078678",
            "extra": "mean: 7.068630878753993 usec\nrounds: 36232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5265592541217395,
            "unit": "iter/sec",
            "range": "stddev: 0.027169484169036265",
            "extra": "mean: 1.8991214990000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 39.547770584240446,
            "unit": "iter/sec",
            "range": "stddev: 0.0020545404427857743",
            "extra": "mean: 25.285875416666197 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 65.35260409863814,
            "unit": "iter/sec",
            "range": "stddev: 0.0014935675547276491",
            "extra": "mean: 15.301609075755847 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 263.3622263676872,
            "unit": "iter/sec",
            "range": "stddev: 0.0006825843972756077",
            "extra": "mean: 3.7970517404567836 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 243.00546507538334,
            "unit": "iter/sec",
            "range": "stddev: 0.0008310622027730771",
            "extra": "mean: 4.115133787998502 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 535276.1783701519,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012901395838823704",
            "extra": "mean: 1.8681944768117145 usec\nrounds: 1738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.96575686084427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005589249128191472",
            "extra": "mean: 9.61855162886446 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 61.50111214958707,
            "unit": "iter/sec",
            "range": "stddev: 0.0014687522931163097",
            "extra": "mean: 16.259868562502316 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3821.635179671352,
            "unit": "iter/sec",
            "range": "stddev: 0.00022469423679657877",
            "extra": "mean: 261.6680957196957 usec\nrounds: 1682"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.27204898706793,
            "unit": "iter/sec",
            "range": "stddev: 0.0018867185924361287",
            "extra": "mean: 13.110962839998592 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 165.5257400177789,
            "unit": "iter/sec",
            "range": "stddev: 0.0008347532323629586",
            "extra": "mean: 6.04135646753545 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 758856.2149092075,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018567637817946854",
            "extra": "mean: 1.3177726957400537 usec\nrounds: 27549"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 77.91708486806964,
            "unit": "iter/sec",
            "range": "stddev: 0.0011029572366958052",
            "extra": "mean: 12.834155714285446 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 104.91301366792668,
            "unit": "iter/sec",
            "range": "stddev: 0.0011428345449178143",
            "extra": "mean: 9.531705982302874 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.593051928654065,
            "unit": "iter/sec",
            "range": "stddev: 0.004784218929305139",
            "extra": "mean: 73.56699623077336 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}