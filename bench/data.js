window.BENCHMARK_DATA = {
  "lastUpdate": 1682457183526,
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
          "id": "75c8e2aaea4a6ffd35bc6bba6876319d14b0a67d",
          "message": "test(bigquery): ensure that columns that do no exist are ignored",
          "timestamp": "2023-04-25T17:01:38-04:00",
          "tree_id": "089a06c6d078adeffa474db25350461560df765e",
          "url": "https://github.com/ibis-project/ibis/commit/75c8e2aaea4a6ffd35bc6bba6876319d14b0a67d"
        },
        "date": 1682457090884,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 78.08284772792041,
            "unit": "iter/sec",
            "range": "stddev: 0.002031536675913406",
            "extra": "mean: 12.80690995651822 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 79.65695704892903,
            "unit": "iter/sec",
            "range": "stddev: 0.001155227966957945",
            "extra": "mean: 12.553831291669267 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1567.2184695935068,
            "unit": "iter/sec",
            "range": "stddev: 0.00024524441278941386",
            "extra": "mean: 638.0731336450957 usec\nrounds: 1070"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 195.56481857506103,
            "unit": "iter/sec",
            "range": "stddev: 0.000571974005514422",
            "extra": "mean: 5.113394153847684 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 130.33639686585528,
            "unit": "iter/sec",
            "range": "stddev: 0.00560885275086769",
            "extra": "mean: 7.672453927272665 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.530503160465422,
            "unit": "iter/sec",
            "range": "stddev: 0.02305089551777977",
            "extra": "mean: 32.75412772413527 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5889062.361373815,
            "unit": "iter/sec",
            "range": "stddev: 1.1206711789551633e-7",
            "extra": "mean: 169.80631866958865 nsec\nrounds: 55556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 80.53081803939642,
            "unit": "iter/sec",
            "range": "stddev: 0.002030701291052414",
            "extra": "mean: 12.417606381581654 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 81.47212131426727,
            "unit": "iter/sec",
            "range": "stddev: 0.0011684059284160838",
            "extra": "mean: 12.274137261538096 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 191.86581850596153,
            "unit": "iter/sec",
            "range": "stddev: 0.004270034864244612",
            "extra": "mean: 5.211975784883896 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 203.62392168238418,
            "unit": "iter/sec",
            "range": "stddev: 0.0008295706986301003",
            "extra": "mean: 4.911014343195962 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2055152684220525,
            "unit": "iter/sec",
            "range": "stddev: 0.019915038099728548",
            "extra": "mean: 829.5208083999967 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4152.287517417282,
            "unit": "iter/sec",
            "range": "stddev: 0.0004025695221950019",
            "extra": "mean: 240.8311071440445 usec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3428188.1376798186,
            "unit": "iter/sec",
            "range": "stddev: 0.00000128877453877152",
            "extra": "mean: 291.6992766553869 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 928.6372773559199,
            "unit": "iter/sec",
            "range": "stddev: 0.00010651194511690414",
            "extra": "mean: 1.0768467133338315 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 78.15618962553117,
            "unit": "iter/sec",
            "range": "stddev: 0.0013793652977570471",
            "extra": "mean: 12.79489193103308 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 72.69494278962135,
            "unit": "iter/sec",
            "range": "stddev: 0.0017012147269731164",
            "extra": "mean: 13.756115097222002 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121543.13767976948,
            "unit": "iter/sec",
            "range": "stddev: 0.000012356135919674213",
            "extra": "mean: 8.22753155044184 usec\nrounds: 29762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1508137.0233513718,
            "unit": "iter/sec",
            "range": "stddev: 0.000009530948471596983",
            "extra": "mean: 663.0697241141967 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 73.4508030230664,
            "unit": "iter/sec",
            "range": "stddev: 0.0015000869364573286",
            "extra": "mean: 13.614555033332465 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7932.791506975641,
            "unit": "iter/sec",
            "range": "stddev: 0.000044846543793022484",
            "extra": "mean: 126.05902967708876 usec\nrounds: 3100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 113.53481676057602,
            "unit": "iter/sec",
            "range": "stddev: 0.013338447161214705",
            "extra": "mean: 8.807870823527336 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.523937174302894,
            "unit": "iter/sec",
            "range": "stddev: 0.0023400136752712076",
            "extra": "mean: 28.965410142859582 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3281.5827850352325,
            "unit": "iter/sec",
            "range": "stddev: 0.00016927369687391017",
            "extra": "mean: 304.730998882682 usec\nrounds: 896"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.44890930050831,
            "unit": "iter/sec",
            "range": "stddev: 0.0021349068368879923",
            "extra": "mean: 22.002728236842767 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9321.182170057602,
            "unit": "iter/sec",
            "range": "stddev: 0.00004108464959760743",
            "extra": "mean: 107.28252937833317 usec\nrounds: 3557"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.14436475258809,
            "unit": "iter/sec",
            "range": "stddev: 0.011786852114860457",
            "extra": "mean: 466.3385735999782 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1676.277676317175,
            "unit": "iter/sec",
            "range": "stddev: 0.00039473574359528773",
            "extra": "mean: 596.5598743741702 usec\nrounds: 1401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.64117799837076,
            "unit": "iter/sec",
            "range": "stddev: 0.0006882929529056042",
            "extra": "mean: 9.742678518516936 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 82.44944317151244,
            "unit": "iter/sec",
            "range": "stddev: 0.001141816180789543",
            "extra": "mean: 12.128644676469028 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.06863432522637,
            "unit": "iter/sec",
            "range": "stddev: 0.0007300742261149066",
            "extra": "mean: 10.51871636841901 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 78.30963858193688,
            "unit": "iter/sec",
            "range": "stddev: 0.0016969838732484358",
            "extra": "mean: 12.769820141024924 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6475161161089124,
            "unit": "iter/sec",
            "range": "stddev: 0.030014757099954565",
            "extra": "mean: 1.5443631055999845 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 150.76918286408073,
            "unit": "iter/sec",
            "range": "stddev: 0.00035632875379768654",
            "extra": "mean: 6.63265516867267 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.80974710754032,
            "unit": "iter/sec",
            "range": "stddev: 0.0005097563428050866",
            "extra": "mean: 12.688785800003188 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 132.743874146132,
            "unit": "iter/sec",
            "range": "stddev: 0.0011452722345907335",
            "extra": "mean: 7.533304315791954 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4501371.314167846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011715813271619464",
            "extra": "mean: 222.15452363462737 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1471.612194765502,
            "unit": "iter/sec",
            "range": "stddev: 0.0007007683006598996",
            "extra": "mean: 679.5268505907887 usec\nrounds: 676"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.419180139210983,
            "unit": "iter/sec",
            "range": "stddev: 0.0022950508465398364",
            "extra": "mean: 31.82769237036854 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 71.3433846972621,
            "unit": "iter/sec",
            "range": "stddev: 0.0011977484955080215",
            "extra": "mean: 14.016716535715139 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 215.13250418576064,
            "unit": "iter/sec",
            "range": "stddev: 0.0006686416316706811",
            "extra": "mean: 4.648298051402448 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 79.44659724861528,
            "unit": "iter/sec",
            "range": "stddev: 0.002373616007801129",
            "extra": "mean: 12.587071499999702 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 44.48849575053991,
            "unit": "iter/sec",
            "range": "stddev: 0.0015320364459693373",
            "extra": "mean: 22.477721108110607 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1715.8012605313745,
            "unit": "iter/sec",
            "range": "stddev: 0.00014376148059289573",
            "extra": "mean: 582.8180821421621 usec\nrounds: 1120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 923024.1106712216,
            "unit": "iter/sec",
            "range": "stddev: 0.00000198993663407719",
            "extra": "mean: 1.0833953181058311 usec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 79.87396445478542,
            "unit": "iter/sec",
            "range": "stddev: 0.001637787064406333",
            "extra": "mean: 12.51972412820543 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1666186.7918323916,
            "unit": "iter/sec",
            "range": "stddev: 0.000003677973612898268",
            "extra": "mean: 600.1728046951137 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4916643.540116654,
            "unit": "iter/sec",
            "range": "stddev: 1.749408683853007e-7",
            "extra": "mean: 203.39078719875943 nsec\nrounds: 50000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10817611292911265,
            "unit": "iter/sec",
            "range": "stddev: 0.10826105322001707",
            "extra": "mean: 9.244184995400008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.670204610326664,
            "unit": "iter/sec",
            "range": "stddev: 0.0013893526708630474",
            "extra": "mean: 28.03460229410896 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.0994658048362613,
            "unit": "iter/sec",
            "range": "stddev: 0.03227042264084205",
            "extra": "mean: 909.5326072000262 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 172.86405333123776,
            "unit": "iter/sec",
            "range": "stddev: 0.0015383642238345316",
            "extra": "mean: 5.784892698795076 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 202.55553279931556,
            "unit": "iter/sec",
            "range": "stddev: 0.001002467756955162",
            "extra": "mean: 4.936917724142162 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 420.98580891234315,
            "unit": "iter/sec",
            "range": "stddev: 0.0004233918791347833",
            "extra": "mean: 2.375376981432213 msec\nrounds: 377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 202.60290637387718,
            "unit": "iter/sec",
            "range": "stddev: 0.0005709995829258907",
            "extra": "mean: 4.935763350574205 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 319.95802910208863,
            "unit": "iter/sec",
            "range": "stddev: 0.0004820123902775634",
            "extra": "mean: 3.125409925815399 msec\nrounds: 337"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 550.4605058430691,
            "unit": "iter/sec",
            "range": "stddev: 0.00023979090732048595",
            "extra": "mean: 1.8166607583743533 msec\nrounds: 418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9488315.071866043,
            "unit": "iter/sec",
            "range": "stddev: 7.320219005727971e-8",
            "extra": "mean: 105.39279022949205 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6590184823246464,
            "unit": "iter/sec",
            "range": "stddev: 0.009334073637533809",
            "extra": "mean: 1.5174081256000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 155.4651689125399,
            "unit": "iter/sec",
            "range": "stddev: 0.0003126527102668017",
            "extra": "mean: 6.43230896666359 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1410.7403811007048,
            "unit": "iter/sec",
            "range": "stddev: 0.00009374071373870127",
            "extra": "mean: 708.8476472331274 usec\nrounds: 1012"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1670.532219901008,
            "unit": "iter/sec",
            "range": "stddev: 0.00026601951009724026",
            "extra": "mean: 598.6116209475192 usec\nrounds: 1203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5129236.001593308,
            "unit": "iter/sec",
            "range": "stddev: 4.4521458160156264e-7",
            "extra": "mean: 194.96080891775446 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.179517109789375,
            "unit": "iter/sec",
            "range": "stddev: 0.0043540560500177905",
            "extra": "mean: 139.28513362500183 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 222.9809620705645,
            "unit": "iter/sec",
            "range": "stddev: 0.0004311779150877944",
            "extra": "mean: 4.484687798967969 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.628726425619515,
            "unit": "iter/sec",
            "range": "stddev: 0.0021626565355764627",
            "extra": "mean: 63.984740199991094 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 79.7467468943597,
            "unit": "iter/sec",
            "range": "stddev: 0.0013768697860016095",
            "extra": "mean: 12.53969646341433 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2221485.6335686655,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012895820067736092",
            "extra": "mean: 450.14920865961807 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10006.199184734553,
            "unit": "iter/sec",
            "range": "stddev: 0.00011912688003676552",
            "extra": "mean: 99.93804655873721 usec\nrounds: 5391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 211.9254391877671,
            "unit": "iter/sec",
            "range": "stddev: 0.00047446663036147677",
            "extra": "mean: 4.7186406871805255 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1440085.2245376003,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065193489713694625",
            "extra": "mean: 694.4033470804424 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1670.0758997774728,
            "unit": "iter/sec",
            "range": "stddev: 0.00021453538155281803",
            "extra": "mean: 598.7751814951906 usec\nrounds: 1124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1696.670586827678,
            "unit": "iter/sec",
            "range": "stddev: 0.00013241865339421168",
            "extra": "mean: 589.3896008828286 usec\nrounds: 1358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 139.84419747122575,
            "unit": "iter/sec",
            "range": "stddev: 0.0010032340704741111",
            "extra": "mean: 7.150815107689823 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 91.1506994361928,
            "unit": "iter/sec",
            "range": "stddev: 0.0007767534320952429",
            "extra": "mean: 10.970842858973548 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 20.4403343701425,
            "unit": "iter/sec",
            "range": "stddev: 0.03985336075381439",
            "extra": "mean: 48.92287875000297 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5577911417328677,
            "unit": "iter/sec",
            "range": "stddev: 0.010488347260115128",
            "extra": "mean: 1.7927857313999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1650.7035373822957,
            "unit": "iter/sec",
            "range": "stddev: 0.00016607848284795452",
            "extra": "mean: 605.8023002639294 usec\nrounds: 1129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.503388365360454,
            "unit": "iter/sec",
            "range": "stddev: 0.0020227333173932173",
            "extra": "mean: 48.77242639999224 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 82.00320110474756,
            "unit": "iter/sec",
            "range": "stddev: 0.001065618351205997",
            "extra": "mean: 12.194645898306343 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 79.92950258342732,
            "unit": "iter/sec",
            "range": "stddev: 0.0014957792061322253",
            "extra": "mean: 12.51102493670893 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.383368075037545,
            "unit": "iter/sec",
            "range": "stddev: 0.0011853026959326707",
            "extra": "mean: 18.055962191485445 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 97.93971839720012,
            "unit": "iter/sec",
            "range": "stddev: 0.0018026217410668003",
            "extra": "mean: 10.210362214280043 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 246.04415304191994,
            "unit": "iter/sec",
            "range": "stddev: 0.0012804953162884607",
            "extra": "mean: 4.064311171944916 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 78.86000247335791,
            "unit": "iter/sec",
            "range": "stddev: 0.0018963617192719487",
            "extra": "mean: 12.680699576922287 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 77.41341302311487,
            "unit": "iter/sec",
            "range": "stddev: 0.0012876548244799878",
            "extra": "mean: 12.91765807692021 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 92.83838714743493,
            "unit": "iter/sec",
            "range": "stddev: 0.0011996074938892692",
            "extra": "mean: 10.771406427084074 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 611.503058188226,
            "unit": "iter/sec",
            "range": "stddev: 0.0005369867402548674",
            "extra": "mean: 1.635314797873327 msec\nrounds: 564"
          }
        ]
      }
    ]
  }
}