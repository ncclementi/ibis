window.BENCHMARK_DATA = {
  "lastUpdate": 1684406149412,
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
          "id": "31a836655675899543589450a40fc4125f81bd9b",
          "message": "fix(snowflake): handle broken upstream behavior when a table can't be found",
          "timestamp": "2023-05-18T05:19:04-05:00",
          "tree_id": "29353af42fe8f1c69617d1094630124d8de04eff",
          "url": "https://github.com/ibis-project/ibis/commit/31a836655675899543589450a40fc4125f81bd9b"
        },
        "date": 1684405538707,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.29741427184048,
            "unit": "iter/sec",
            "range": "stddev: 0.0003538383372797634",
            "extra": "mean: 23.096067439998933 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 78.6072442357103,
            "unit": "iter/sec",
            "range": "stddev: 0.012547613419472126",
            "extra": "mean: 12.721473825000373 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3983235448680944,
            "unit": "iter/sec",
            "range": "stddev: 0.004575003000359593",
            "extra": "mean: 715.1420739999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 72.48524416751832,
            "unit": "iter/sec",
            "range": "stddev: 0.013545930553520553",
            "extra": "mean: 13.795911312500131 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.741127828834,
            "unit": "iter/sec",
            "range": "stddev: 0.00016099881295168994",
            "extra": "mean: 5.789009326087541 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 891167.1971473014,
            "unit": "iter/sec",
            "range": "stddev: 4.704658728528745e-7",
            "extra": "mean: 1.1221238878642315 usec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9302.538284206348,
            "unit": "iter/sec",
            "range": "stddev: 0.00000628297870605823",
            "extra": "mean: 107.4975420093437 usec\nrounds: 4011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3822812.6649192395,
            "unit": "iter/sec",
            "range": "stddev: 5.068254602910628e-8",
            "extra": "mean: 261.5874979113558 nsec\nrounds: 131562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 604.8832924117537,
            "unit": "iter/sec",
            "range": "stddev: 0.00010971967826711832",
            "extra": "mean: 1.6532114749158653 msec\nrounds: 299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1940.8405472719178,
            "unit": "iter/sec",
            "range": "stddev: 0.00009332898574827094",
            "extra": "mean: 515.2406782749974 usec\nrounds: 603"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.77194584794929,
            "unit": "iter/sec",
            "range": "stddev: 0.001216002393038903",
            "extra": "mean: 59.62337399999835 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11812.3515375234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072893538820886744",
            "extra": "mean: 84.6571486484614 usec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8121976123313487,
            "unit": "iter/sec",
            "range": "stddev: 0.020978614704609218",
            "extra": "mean: 1.2312274559999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 370.58061622437504,
            "unit": "iter/sec",
            "range": "stddev: 0.00006477252685142217",
            "extra": "mean: 2.6984681772846186 msec\nrounds: 361"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 86.04564159272533,
            "unit": "iter/sec",
            "range": "stddev: 0.001009826661592832",
            "extra": "mean: 11.621739131579028 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 82.27065166401613,
            "unit": "iter/sec",
            "range": "stddev: 0.0008238005510205734",
            "extra": "mean: 12.155002783785946 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 223.82910066204656,
            "unit": "iter/sec",
            "range": "stddev: 0.00047634652042177436",
            "extra": "mean: 4.467694312500825 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.62579889669615,
            "unit": "iter/sec",
            "range": "stddev: 0.0009310626423354448",
            "extra": "mean: 12.102757411765076 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1973.3780157184879,
            "unit": "iter/sec",
            "range": "stddev: 0.00009269175542861721",
            "extra": "mean: 506.7452824723547 usec\nrounds: 1278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1679321.4942793313,
            "unit": "iter/sec",
            "range": "stddev: 2.925131102349219e-7",
            "extra": "mean: 595.4785926378813 nsec\nrounds: 135117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1829.731551958913,
            "unit": "iter/sec",
            "range": "stddev: 0.0001688679640904469",
            "extra": "mean: 546.5282592571564 usec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1651036.0996610066,
            "unit": "iter/sec",
            "range": "stddev: 1.7892918411866e-7",
            "extra": "mean: 605.680275679812 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14587635766012338,
            "unit": "iter/sec",
            "range": "stddev: 0.15342333167387714",
            "extra": "mean: 6.8551204323999855 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1902.3117871271027,
            "unit": "iter/sec",
            "range": "stddev: 0.00010011756039128995",
            "extra": "mean: 525.6761834558223 usec\nrounds: 1221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 244.92032661598154,
            "unit": "iter/sec",
            "range": "stddev: 0.0003352045167208624",
            "extra": "mean: 4.0829604215248825 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 248.91033904307363,
            "unit": "iter/sec",
            "range": "stddev: 0.0003427189649579764",
            "extra": "mean: 4.017510899083028 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 196.41563148411876,
            "unit": "iter/sec",
            "range": "stddev: 0.004422470703151026",
            "extra": "mean: 5.091244482142223 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 449.80581079920535,
            "unit": "iter/sec",
            "range": "stddev: 0.00011356543217019522",
            "extra": "mean: 2.2231815952382235 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10705.135482751984,
            "unit": "iter/sec",
            "range": "stddev: 0.000015535259255243246",
            "extra": "mean: 93.41311014803978 usec\nrounds: 4848"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 235.6875098507985,
            "unit": "iter/sec",
            "range": "stddev: 0.0003945370337867709",
            "extra": "mean: 4.2429062135411755 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.60141025818184,
            "unit": "iter/sec",
            "range": "stddev: 0.0008159154872054185",
            "extra": "mean: 11.41534134042781 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.233019524715296,
            "unit": "iter/sec",
            "range": "stddev: 0.03078216677226207",
            "extra": "mean: 38.11989691304333 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.00018219743798,
            "unit": "iter/sec",
            "range": "stddev: 0.0008636120061984278",
            "extra": "mean: 11.111088617645786 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 81.7357535398321,
            "unit": "iter/sec",
            "range": "stddev: 0.0007470575100373998",
            "extra": "mean: 12.234548000009227 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 242.82165049751896,
            "unit": "iter/sec",
            "range": "stddev: 0.00035346809811349125",
            "extra": "mean: 4.118248920354067 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 72.15807887984518,
            "unit": "iter/sec",
            "range": "stddev: 0.0008012383560376783",
            "extra": "mean: 13.858462081081193 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1397370.5479479362,
            "unit": "iter/sec",
            "range": "stddev: 3.4351025705743107e-7",
            "extra": "mean: 715.6297958823578 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4670225.900337868,
            "unit": "iter/sec",
            "range": "stddev: 3.608650273812196e-8",
            "extra": "mean: 214.12240464161323 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.3085945749997596,
            "unit": "iter/sec",
            "range": "stddev: 0.010393478910095863",
            "extra": "mean: 433.16397379999216 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 93.99292681746958,
            "unit": "iter/sec",
            "range": "stddev: 0.0008730903027217032",
            "extra": "mean: 10.639098428565365 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6750088061075062,
            "unit": "iter/sec",
            "range": "stddev: 0.007832436969091751",
            "extra": "mean: 1.4814621542000055 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 150.29341554059525,
            "unit": "iter/sec",
            "range": "stddev: 0.0003080814352300916",
            "extra": "mean: 6.65365143511489 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 246.98888517592732,
            "unit": "iter/sec",
            "range": "stddev: 0.00046500968946291705",
            "extra": "mean: 4.048765187501096 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 89.88384310952817,
            "unit": "iter/sec",
            "range": "stddev: 0.00022283531801970386",
            "extra": "mean: 11.125470000002643 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 85.42525324729793,
            "unit": "iter/sec",
            "range": "stddev: 0.0008497836173957525",
            "extra": "mean: 11.706140303793958 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141295.90969113138,
            "unit": "iter/sec",
            "range": "stddev: 6.812012932758769e-7",
            "extra": "mean: 7.077345707925798 usec\nrounds: 36230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 71.5370699592105,
            "unit": "iter/sec",
            "range": "stddev: 0.019223305702745056",
            "extra": "mean: 13.978766541181892 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.86730529541728,
            "unit": "iter/sec",
            "range": "stddev: 0.0002188086248564585",
            "extra": "mean: 9.185494187501439 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 165.2521256531349,
            "unit": "iter/sec",
            "range": "stddev: 0.00010778783719190322",
            "extra": "mean: 6.051359376151115 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 85.30142142523852,
            "unit": "iter/sec",
            "range": "stddev: 0.001022010721103459",
            "extra": "mean: 11.723134073169447 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.5974035387255,
            "unit": "iter/sec",
            "range": "stddev: 0.0010971060600229719",
            "extra": "mean: 11.682597352939398 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.455346941500686,
            "unit": "iter/sec",
            "range": "stddev: 0.0017440360142711615",
            "extra": "mean: 20.2202605348795 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 633.2306422007176,
            "unit": "iter/sec",
            "range": "stddev: 0.000029039771736995036",
            "extra": "mean: 1.579203426613436 msec\nrounds: 511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1888.6877829207147,
            "unit": "iter/sec",
            "range": "stddev: 0.00012757817398454334",
            "extra": "mean: 529.4681360481798 usec\nrounds: 1154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5238247.144243596,
            "unit": "iter/sec",
            "range": "stddev: 2.000202744666052e-8",
            "extra": "mean: 190.90355465544792 nsec\nrounds: 52081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 96.09860138093615,
            "unit": "iter/sec",
            "range": "stddev: 0.0001777850626307933",
            "extra": "mean: 10.405978709679514 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1878.8099516758057,
            "unit": "iter/sec",
            "range": "stddev: 0.00010296173388859488",
            "extra": "mean: 532.2518113703035 usec\nrounds: 1108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.0058873084845,
            "unit": "iter/sec",
            "range": "stddev: 0.0008203769724107689",
            "extra": "mean: 24.996320973686256 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 137.97148201233318,
            "unit": "iter/sec",
            "range": "stddev: 0.0002969588164516473",
            "extra": "mean: 7.247874599988791 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3849.9147023138926,
            "unit": "iter/sec",
            "range": "stddev: 0.000031004228640718924",
            "extra": "mean: 259.7460144763663 usec\nrounds: 1796"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.4583344689813895,
            "unit": "iter/sec",
            "range": "stddev: 0.0015583174744005514",
            "extra": "mean: 134.07819187499825 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 992.232326173347,
            "unit": "iter/sec",
            "range": "stddev: 0.000021533192149051263",
            "extra": "mean: 1.0078284829285997 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 239.22039266602135,
            "unit": "iter/sec",
            "range": "stddev: 0.0003206505024336423",
            "extra": "mean: 4.180245625614839 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2291823.6146188527,
            "unit": "iter/sec",
            "range": "stddev: 5.046897517652995e-8",
            "extra": "mean: 436.33375344487735 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.869758276825884,
            "unit": "iter/sec",
            "range": "stddev: 0.00048413075597615715",
            "extra": "mean: 20.890015659095308 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 202.59637632613993,
            "unit": "iter/sec",
            "range": "stddev: 0.00040858947998294743",
            "extra": "mean: 4.935922439156555 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 272.08934884046926,
            "unit": "iter/sec",
            "range": "stddev: 0.00006720327280534015",
            "extra": "mean: 3.675263306930539 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.43994491553096,
            "unit": "iter/sec",
            "range": "stddev: 0.0008638834982769841",
            "extra": "mean: 10.936139571428715 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1843.327824740224,
            "unit": "iter/sec",
            "range": "stddev: 0.00010648749927242825",
            "extra": "mean: 542.4971003955455 usec\nrounds: 1514"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9614620.859464074,
            "unit": "iter/sec",
            "range": "stddev: 1.2953261900136921e-8",
            "extra": "mean: 104.00826144023999 nsec\nrounds: 94331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 86.77741490961078,
            "unit": "iter/sec",
            "range": "stddev: 0.0010209084404537614",
            "extra": "mean: 11.523735767441579 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.250615355441195,
            "unit": "iter/sec",
            "range": "stddev: 0.0003078676112528795",
            "extra": "mean: 38.09434508333235 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 80.11650334554525,
            "unit": "iter/sec",
            "range": "stddev: 0.02011989617882387",
            "extra": "mean: 12.481822823531944 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.23557431610895,
            "unit": "iter/sec",
            "range": "stddev: 0.0013995240297226465",
            "extra": "mean: 31.021628161291176 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5995849.8606021525,
            "unit": "iter/sec",
            "range": "stddev: 6.985966443106146e-9",
            "extra": "mean: 166.7820281109706 nsec\nrounds: 54642"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.99447286888697,
            "unit": "iter/sec",
            "range": "stddev: 0.0002636538207682903",
            "extra": "mean: 11.364350139241294 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7861376582072389,
            "unit": "iter/sec",
            "range": "stddev: 0.009257264177036324",
            "extra": "mean: 1.2720418485999858 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 148.74819411589849,
            "unit": "iter/sec",
            "range": "stddev: 0.004165242518162353",
            "extra": "mean: 6.72277069273756 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5155803.369313667,
            "unit": "iter/sec",
            "range": "stddev: 6.369458139674731e-8",
            "extra": "mean: 193.9561942861606 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.71956730072897,
            "unit": "iter/sec",
            "range": "stddev: 0.0010321725431621344",
            "extra": "mean: 10.902798927531052 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.71971895358973,
            "unit": "iter/sec",
            "range": "stddev: 0.000296526737948497",
            "extra": "mean: 11.531402685186002 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1227793346117336,
            "unit": "iter/sec",
            "range": "stddev: 0.0919583875773394",
            "extra": "mean: 890.6469590000142 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.01611669714248,
            "unit": "iter/sec",
            "range": "stddev: 0.0008128793336123672",
            "extra": "mean: 24.9899311212127 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 140.67183573299417,
            "unit": "iter/sec",
            "range": "stddev: 0.00022468203658672925",
            "extra": "mean: 7.108743514928433 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.65614458306566,
            "unit": "iter/sec",
            "range": "stddev: 0.0006466939161624862",
            "extra": "mean: 46.17627094999932 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.66562545869657,
            "unit": "iter/sec",
            "range": "stddev: 0.0009539999375837051",
            "extra": "mean: 11.538600162489843 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 88.31029318316132,
            "unit": "iter/sec",
            "range": "stddev: 0.0008385570402877703",
            "extra": "mean: 11.323708301204874 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1927.4321369518914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000977850554651529",
            "extra": "mean: 518.8250111785699 usec\nrounds: 1163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 240.78984280294787,
            "unit": "iter/sec",
            "range": "stddev: 0.00045185374768515635",
            "extra": "mean: 4.152999098132048 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7324.4169867386145,
            "unit": "iter/sec",
            "range": "stddev: 0.000025944385240649813",
            "extra": "mean: 136.52963803270242 usec\nrounds: 3923"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1931.3365115571578,
            "unit": "iter/sec",
            "range": "stddev: 0.00010271976741424392",
            "extra": "mean: 517.7761586424631 usec\nrounds: 1267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1505.2348934965007,
            "unit": "iter/sec",
            "range": "stddev: 0.000015045452319006513",
            "extra": "mean: 664.3481388324093 usec\nrounds: 958"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "55330d5530e87321bc9258864ecf35feefc50977",
          "message": "chore(deps): update trinodb/trino docker tag to v418",
          "timestamp": "2023-05-18T05:19:34-05:00",
          "tree_id": "2a944e2c727a0cb37b0a960a06b7bdf526011a9a",
          "url": "https://github.com/ibis-project/ibis/commit/55330d5530e87321bc9258864ecf35feefc50977"
        },
        "date": 1684406068828,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1180.876433957482,
            "unit": "iter/sec",
            "range": "stddev: 0.00002080390681142009",
            "extra": "mean: 846.8286530612612 usec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6138239.2189081,
            "unit": "iter/sec",
            "range": "stddev: 8.17339828994172e-9",
            "extra": "mean: 162.9131684731562 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.32603469211566,
            "unit": "iter/sec",
            "range": "stddev: 0.0006635219683792383",
            "extra": "mean: 6.356227066657993 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9306487130781084,
            "unit": "iter/sec",
            "range": "stddev: 0.0024050771629948956",
            "extra": "mean: 1.0745192960000054 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 107.03438287911766,
            "unit": "iter/sec",
            "range": "stddev: 0.00012718470802440733",
            "extra": "mean: 9.342792223405246 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.7235373888711,
            "unit": "iter/sec",
            "range": "stddev: 0.00005034532051795696",
            "extra": "mean: 6.0341458778634145 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2224.3676620065376,
            "unit": "iter/sec",
            "range": "stddev: 0.00007940987948523302",
            "extra": "mean: 449.5659674794629 usec\nrounds: 615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.40897038964819,
            "unit": "iter/sec",
            "range": "stddev: 0.011255533734993788",
            "extra": "mean: 10.939845353659592 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 755.2710741943023,
            "unit": "iter/sec",
            "range": "stddev: 0.00008113875092143871",
            "extra": "mean: 1.3240279340325145 msec\nrounds: 667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 289.59614068289466,
            "unit": "iter/sec",
            "range": "stddev: 0.00024041834338529912",
            "extra": "mean: 3.4530846911215978 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 86.219563064402,
            "unit": "iter/sec",
            "range": "stddev: 0.000526000116557621",
            "extra": "mean: 11.59829584444828 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.036815999010326,
            "unit": "iter/sec",
            "range": "stddev: 0.00009275018090979865",
            "extra": "mean: 52.52979280001379 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.89100615421947,
            "unit": "iter/sec",
            "range": "stddev: 0.00019160184270856448",
            "extra": "mean: 9.017863888882657 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.80022162767443,
            "unit": "iter/sec",
            "range": "stddev: 0.0007872948078508741",
            "extra": "mean: 9.823161325300589 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7180791.427264184,
            "unit": "iter/sec",
            "range": "stddev: 3.7793434657748725e-9",
            "extra": "mean: 139.26041580930848 nsec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 279.8247553635289,
            "unit": "iter/sec",
            "range": "stddev: 0.0002976625028035199",
            "extra": "mean: 3.573665234517473 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2104.4072179084756,
            "unit": "iter/sec",
            "range": "stddev: 0.00006788209994131161",
            "extra": "mean: 475.19320000901644 usec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.76091635540559,
            "unit": "iter/sec",
            "range": "stddev: 0.00024344478283248029",
            "extra": "mean: 20.09609294285773 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.86390624472666,
            "unit": "iter/sec",
            "range": "stddev: 0.0006993226128406918",
            "extra": "mean: 9.536169648937596 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.50747368698008,
            "unit": "iter/sec",
            "range": "stddev: 0.0006651402885670461",
            "extra": "mean: 9.301678903846359 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10500.381217546977,
            "unit": "iter/sec",
            "range": "stddev: 0.000001603223307182935",
            "extra": "mean: 95.23463760810132 usec\nrounds: 5403"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 282.18736466008824,
            "unit": "iter/sec",
            "range": "stddev: 0.00025128217028528394",
            "extra": "mean: 3.543744778241792 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.55269910525876,
            "unit": "iter/sec",
            "range": "stddev: 0.00014919855792106646",
            "extra": "mean: 116.92215377776292 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 410.1830201391821,
            "unit": "iter/sec",
            "range": "stddev: 0.0001030345243352474",
            "extra": "mean: 2.437936118517736 msec\nrounds: 405"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4495816.421528292,
            "unit": "iter/sec",
            "range": "stddev: 1.1442600882865981e-8",
            "extra": "mean: 222.42901093799028 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 88.99474800038256,
            "unit": "iter/sec",
            "range": "stddev: 0.01389534325153352",
            "extra": "mean: 11.236618142856042 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 165.70824690500606,
            "unit": "iter/sec",
            "range": "stddev: 0.0040230265607650115",
            "extra": "mean: 6.034702669766703 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2224.3764265948125,
            "unit": "iter/sec",
            "range": "stddev: 0.00008390816204585176",
            "extra": "mean: 449.56419607937056 usec\nrounds: 1224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.06590603924946,
            "unit": "iter/sec",
            "range": "stddev: 0.0009179384530279187",
            "extra": "mean: 10.519018243902648 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.49720687826184,
            "unit": "iter/sec",
            "range": "stddev: 0.000656486813770298",
            "extra": "mean: 10.256704084339896 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.72584480186431,
            "unit": "iter/sec",
            "range": "stddev: 0.0006251148133501817",
            "extra": "mean: 9.73464858749793 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.67474087011972,
            "unit": "iter/sec",
            "range": "stddev: 0.018591697837986854",
            "extra": "mean: 9.83528447126715 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.68616985832152,
            "unit": "iter/sec",
            "range": "stddev: 0.0003349752529753491",
            "extra": "mean: 17.640987254904474 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.0906084721638,
            "unit": "iter/sec",
            "range": "stddev: 0.00002417325344413021",
            "extra": "mean: 1.4532969752637659 msec\nrounds: 566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1684.9208706235631,
            "unit": "iter/sec",
            "range": "stddev: 0.000027888217008595977",
            "extra": "mean: 593.4996814597682 usec\nrounds: 1397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 98.69163444047875,
            "unit": "iter/sec",
            "range": "stddev: 0.0006556467305135736",
            "extra": "mean: 10.132571070176198 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 283.9998977555949,
            "unit": "iter/sec",
            "range": "stddev: 0.00026157382686926937",
            "extra": "mean: 3.5211280282240867 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.01132558858177,
            "unit": "iter/sec",
            "range": "stddev: 0.0001706466748768052",
            "extra": "mean: 5.7799684303788545 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.358881315241798,
            "unit": "iter/sec",
            "range": "stddev: 0.0008219200840512585",
            "extra": "mean: 735.8994407999944 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2162.6876924875305,
            "unit": "iter/sec",
            "range": "stddev: 0.00008474510897771501",
            "extra": "mean: 462.3876130953502 usec\nrounds: 1344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148043.73614772124,
            "unit": "iter/sec",
            "range": "stddev: 3.066404967023325e-7",
            "extra": "mean: 6.754760626968901 usec\nrounds: 37452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.99737412616263,
            "unit": "iter/sec",
            "range": "stddev: 0.00017346682305276426",
            "extra": "mean: 10.416951600006996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.88550487946694,
            "unit": "iter/sec",
            "range": "stddev: 0.0006981143426681286",
            "extra": "mean: 23.317902000001585 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 88.52012264900414,
            "unit": "iter/sec",
            "range": "stddev: 0.013945894563877235",
            "extra": "mean: 11.296866408162959 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.5098834583841,
            "unit": "iter/sec",
            "range": "stddev: 0.0004408043617713324",
            "extra": "mean: 3.944619382715936 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 99.13707389066302,
            "unit": "iter/sec",
            "range": "stddev: 0.000643317623465954",
            "extra": "mean: 10.08704373404128 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2188.678244842995,
            "unit": "iter/sec",
            "range": "stddev: 0.00008943872816015107",
            "extra": "mean: 456.8967605705494 usec\nrounds: 1892"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 284.5442226067469,
            "unit": "iter/sec",
            "range": "stddev: 0.0002641249548723446",
            "extra": "mean: 3.5143922123558475 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7724883612067666,
            "unit": "iter/sec",
            "range": "stddev: 0.0020100969391139774",
            "extra": "mean: 1.2945178856000097 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13743.50349689335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013699340831785474",
            "extra": "mean: 72.76165063923074 usec\nrounds: 6177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 273.9652986663125,
            "unit": "iter/sec",
            "range": "stddev: 0.00032281717679759673",
            "extra": "mean: 3.6500973111123534 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 84.96996669825992,
            "unit": "iter/sec",
            "range": "stddev: 0.0187661182574065",
            "extra": "mean: 11.768864209999492 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 108.05096990797742,
            "unit": "iter/sec",
            "range": "stddev: 0.00035151055065670543",
            "extra": "mean: 9.254891472530595 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 233.41152277166498,
            "unit": "iter/sec",
            "range": "stddev: 0.000335862194638519",
            "extra": "mean: 4.284278634256848 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.9642534041216,
            "unit": "iter/sec",
            "range": "stddev: 0.0007434540289196837",
            "extra": "mean: 9.904495564359589 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5571759.32789252,
            "unit": "iter/sec",
            "range": "stddev: 8.99599526477755e-9",
            "extra": "mean: 179.47652458610804 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.82776182152473,
            "unit": "iter/sec",
            "range": "stddev: 0.0007823878034292398",
            "extra": "mean: 9.44931634939487 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8523.055117244909,
            "unit": "iter/sec",
            "range": "stddev: 0.000018184263212044202",
            "extra": "mean: 117.32882003504534 usec\nrounds: 4562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 323.46480940392416,
            "unit": "iter/sec",
            "range": "stddev: 0.000020692553423872004",
            "extra": "mean: 3.091526406976957 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6279867.686865233,
            "unit": "iter/sec",
            "range": "stddev: 4.6740113750188e-9",
            "extra": "mean: 159.2390237921211 nsec\nrounds: 62497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6116752088412625,
            "unit": "iter/sec",
            "range": "stddev: 0.0009601252452590902",
            "extra": "mean: 620.4724094000085 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 206.02386118639754,
            "unit": "iter/sec",
            "range": "stddev: 0.00009662422589960076",
            "extra": "mean: 4.853806710744356 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 237.52987444579352,
            "unit": "iter/sec",
            "range": "stddev: 0.00399759462383275",
            "extra": "mean: 4.209996752337816 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 48.05057433835546,
            "unit": "iter/sec",
            "range": "stddev: 0.0005702723434330629",
            "extra": "mean: 20.81140576922863 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 103.04159478718519,
            "unit": "iter/sec",
            "range": "stddev: 0.0007266530303883807",
            "extra": "mean: 9.704818739125 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.856369447109934,
            "unit": "iter/sec",
            "range": "stddev: 0.0006780101130300306",
            "extra": "mean: 38.675189958340184 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.6586000150935,
            "unit": "iter/sec",
            "range": "stddev: 0.00017346518755180024",
            "extra": "mean: 18.990250399998683 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9240129064141681,
            "unit": "iter/sec",
            "range": "stddev: 0.004047120457621074",
            "extra": "mean: 1.0822359656000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.7205914672369,
            "unit": "iter/sec",
            "range": "stddev: 0.0006187753549289212",
            "extra": "mean: 27.232676818188693 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1017018.1454181303,
            "unit": "iter/sec",
            "range": "stddev: 1.1463724171004868e-7",
            "extra": "mean: 983.266625581067 nsec\nrounds: 79366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11604022.909111502,
            "unit": "iter/sec",
            "range": "stddev: 3.362909208861176e-9",
            "extra": "mean: 86.17701014833561 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4517.710037655102,
            "unit": "iter/sec",
            "range": "stddev: 0.00009570333396386984",
            "extra": "mean: 221.35108089386048 usec\nrounds: 2015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2123.636826690495,
            "unit": "iter/sec",
            "range": "stddev: 0.00008678453926564207",
            "extra": "mean: 470.8903082823317 usec\nrounds: 1304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 104.04138744716671,
            "unit": "iter/sec",
            "range": "stddev: 0.0007431807855147385",
            "extra": "mean: 9.611559635417303 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2675106.5245812433,
            "unit": "iter/sec",
            "range": "stddev: 1.8081193459708365e-8",
            "extra": "mean: 373.8168894627032 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 185.39528483673843,
            "unit": "iter/sec",
            "range": "stddev: 0.0004413303773692007",
            "extra": "mean: 5.393880437038155 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.50817237124373,
            "unit": "iter/sec",
            "range": "stddev: 0.0007074592082518997",
            "extra": "mean: 15.035746200001912 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12459.954894070244,
            "unit": "iter/sec",
            "range": "stddev: 0.000012226386576253867",
            "extra": "mean: 80.25711236530279 usec\nrounds: 4254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 274.058851172071,
            "unit": "iter/sec",
            "range": "stddev: 0.0002500516238732224",
            "extra": "mean: 3.6488513168733188 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2119.7587621903444,
            "unit": "iter/sec",
            "range": "stddev: 0.00009071813014850189",
            "extra": "mean: 471.75179451396684 usec\nrounds: 1932"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 533.3484720044338,
            "unit": "iter/sec",
            "range": "stddev: 0.000022083679517454687",
            "extra": "mean: 1.8749467796200734 msec\nrounds: 422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1925463.262887035,
            "unit": "iter/sec",
            "range": "stddev: 7.396881661226574e-8",
            "extra": "mean: 519.3555334317842 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2178.290591063245,
            "unit": "iter/sec",
            "range": "stddev: 0.00010047498062726427",
            "extra": "mean: 459.075572424839 usec\nrounds: 1291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.291807517169396,
            "unit": "iter/sec",
            "range": "stddev: 0.035248481780825784",
            "extra": "mean: 39.538494799991966 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17237455790796288,
            "unit": "iter/sec",
            "range": "stddev: 0.09625651894307861",
            "extra": "mean: 5.8013201724000165 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.9778507394201,
            "unit": "iter/sec",
            "range": "stddev: 0.0008131803113430649",
            "extra": "mean: 10.419070569885966 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.12786247119496,
            "unit": "iter/sec",
            "range": "stddev: 0.0008104986280095011",
            "extra": "mean: 9.987230080814744 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.501927342214297,
            "unit": "iter/sec",
            "range": "stddev: 0.0032473468740826213",
            "extra": "mean: 399.6918628000458 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.86163406357278,
            "unit": "iter/sec",
            "range": "stddev: 0.0008550733262390321",
            "extra": "mean: 10.01385576530213 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1711.3376821377192,
            "unit": "iter/sec",
            "range": "stddev: 0.004798327513474083",
            "extra": "mean: 584.3382112353471 usec\nrounds: 1780"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1633194.6536157823,
            "unit": "iter/sec",
            "range": "stddev: 1.2623478104838728e-7",
            "extra": "mean: 612.296885607645 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1923967.9873478068,
            "unit": "iter/sec",
            "range": "stddev: 8.732706090696904e-8",
            "extra": "mean: 519.7591678115714 nsec\nrounds: 156250"
          }
        ]
      }
    ]
  }
}