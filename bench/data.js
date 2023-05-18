window.BENCHMARK_DATA = {
  "lastUpdate": 1684405634152,
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
      }
    ]
  }
}