window.BENCHMARK_DATA = {
  "lastUpdate": 1675800537776,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "c264477ea80f9008fca27a97c8694be07d98abc6",
          "message": "docs(blog): specify parsy 2.0 in substrait blog article\n\notherwise it breaks",
          "timestamp": "2023-02-07T14:03:09-06:00",
          "tree_id": "24edc70b33e3429f2f0355600d68cbca94ef9f27",
          "url": "https://github.com/ibis-project/ibis/commit/c264477ea80f9008fca27a97c8694be07d98abc6"
        },
        "date": 1675800457184,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.64435283393168,
            "unit": "iter/sec",
            "range": "stddev: 0.005852795874883901",
            "extra": "mean: 11.409748234376238 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5301.995387509959,
            "unit": "iter/sec",
            "range": "stddev: 0.000048005751522290435",
            "extra": "mean: 188.60823650577376 usec\nrounds: 2816"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.16533408040455,
            "unit": "iter/sec",
            "range": "stddev: 0.00018776848370432222",
            "extra": "mean: 10.186895500003365 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 151.54022040770104,
            "unit": "iter/sec",
            "range": "stddev: 0.0047840346025279845",
            "extra": "mean: 6.598908179687335 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19629.022498979073,
            "unit": "iter/sec",
            "range": "stddev: 0.000013539594841936167",
            "extra": "mean: 50.944971918597126 usec\nrounds: 6766"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4558202.152032758,
            "unit": "iter/sec",
            "range": "stddev: 9.686816630487616e-9",
            "extra": "mean: 219.38474131831194 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10333.976343792376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000201024380551541",
            "extra": "mean: 96.76817197290184 usec\nrounds: 4303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.61051163521235,
            "unit": "iter/sec",
            "range": "stddev: 0.0005583425092675725",
            "extra": "mean: 10.797910327274126 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.86750932624994,
            "unit": "iter/sec",
            "range": "stddev: 0.0005803738185217558",
            "extra": "mean: 11.005033673913175 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 75.8885938746507,
            "unit": "iter/sec",
            "range": "stddev: 0.009322610134729539",
            "extra": "mean: 13.177210815788131 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 574167.016648777,
            "unit": "iter/sec",
            "range": "stddev: 0.000007488647011604649",
            "extra": "mean: 1.7416535102219375 usec\nrounds: 24272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.04054888367404,
            "unit": "iter/sec",
            "range": "stddev: 0.00019430357708187746",
            "extra": "mean: 21.719984323527463 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 159.23361397953155,
            "unit": "iter/sec",
            "range": "stddev: 0.0006483469371666381",
            "extra": "mean: 6.280081039475393 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58248.834785852785,
            "unit": "iter/sec",
            "range": "stddev: 9.847999746428243e-7",
            "extra": "mean: 17.167725391871283 usec\nrounds: 13532"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7587818743605655,
            "unit": "iter/sec",
            "range": "stddev: 0.0037547731269707836",
            "extra": "mean: 1.3179018026000051 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6076.39493152822,
            "unit": "iter/sec",
            "range": "stddev: 0.00004719927492841815",
            "extra": "mean: 164.5712649142275 usec\nrounds: 2397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.99308843733776,
            "unit": "iter/sec",
            "range": "stddev: 0.0007020319816721602",
            "extra": "mean: 28.577071777779867 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1571649.1702225916,
            "unit": "iter/sec",
            "range": "stddev: 9.62567966676082e-8",
            "extra": "mean: 636.2743155066665 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.95330594472163,
            "unit": "iter/sec",
            "range": "stddev: 0.0001195014145333223",
            "extra": "mean: 13.707397999999102 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5963308812317165,
            "unit": "iter/sec",
            "range": "stddev: 0.001076597864995065",
            "extra": "mean: 626.436543799997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.662591735898697,
            "unit": "iter/sec",
            "range": "stddev: 0.00018567673226745638",
            "extra": "mean: 73.19255521428504 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.27156951388856,
            "unit": "iter/sec",
            "range": "stddev: 0.00045594995346488065",
            "extra": "mean: 11.328675874995753 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10759.176725800671,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021942625525362866",
            "extra": "mean: 92.94391434262667 usec\nrounds: 502"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2003863.6535209457,
            "unit": "iter/sec",
            "range": "stddev: 5.25508088611699e-8",
            "extra": "mean: 499.03594899934944 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.6358657907982,
            "unit": "iter/sec",
            "range": "stddev: 0.000352836513036382",
            "extra": "mean: 22.91692812500301 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 161.07003264831727,
            "unit": "iter/sec",
            "range": "stddev: 0.0006048117709515158",
            "extra": "mean: 6.208479526315209 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.181303081780891,
            "unit": "iter/sec",
            "range": "stddev: 0.0002829529056330257",
            "extra": "mean: 108.91700133332607 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12051263.805385862,
            "unit": "iter/sec",
            "range": "stddev: 5.3141102342579945e-9",
            "extra": "mean: 82.97884903586612 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 244.12520254756117,
            "unit": "iter/sec",
            "range": "stddev: 0.00023888533412790716",
            "extra": "mean: 4.096258762161916 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 249.50719764661287,
            "unit": "iter/sec",
            "range": "stddev: 0.00021129782334026786",
            "extra": "mean: 4.007900411018765 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 125.86633137951013,
            "unit": "iter/sec",
            "range": "stddev: 0.012488470044103717",
            "extra": "mean: 7.94493641818173 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.09147280654238,
            "unit": "iter/sec",
            "range": "stddev: 0.00013641043013586454",
            "extra": "mean: 7.037719999999581 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5869.708827079872,
            "unit": "iter/sec",
            "range": "stddev: 0.000046425894890005045",
            "extra": "mean: 170.36620204847387 usec\nrounds: 2148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.8400639155038,
            "unit": "iter/sec",
            "range": "stddev: 0.00036421033794239787",
            "extra": "mean: 4.528163876925034 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 118714.79940718501,
            "unit": "iter/sec",
            "range": "stddev: 3.0240949110900014e-7",
            "extra": "mean: 8.423549591067049 usec\nrounds: 34966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 247.08568505116764,
            "unit": "iter/sec",
            "range": "stddev: 0.00019690839407398097",
            "extra": "mean: 4.047179017242199 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 148.66744113901424,
            "unit": "iter/sec",
            "range": "stddev: 0.0006502915710811822",
            "extra": "mean: 6.726422358106852 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.50013905671902,
            "unit": "iter/sec",
            "range": "stddev: 0.0003899277991743605",
            "extra": "mean: 37.73565104166702 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.908649266492716,
            "unit": "iter/sec",
            "range": "stddev: 0.0002224391776880394",
            "extra": "mean: 203.7220313999967 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5109.258443244205,
            "unit": "iter/sec",
            "range": "stddev: 0.000051504036095776555",
            "extra": "mean: 195.7231193349135 usec\nrounds: 1986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4541.601362796121,
            "unit": "iter/sec",
            "range": "stddev: 0.000022636568421948604",
            "extra": "mean: 220.186652265828 usec\nrounds: 1412"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 128.54588897840438,
            "unit": "iter/sec",
            "range": "stddev: 0.009733093305827964",
            "extra": "mean: 7.779323072463246 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4481769.885757232,
            "unit": "iter/sec",
            "range": "stddev: 1.0547245506846495e-8",
            "extra": "mean: 223.12613665812916 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 248.3385257453817,
            "unit": "iter/sec",
            "range": "stddev: 0.0002248222263569299",
            "extra": "mean: 4.026761441860564 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 630.2443732447589,
            "unit": "iter/sec",
            "range": "stddev: 0.00002995336108832355",
            "extra": "mean: 1.5866861212129288 msec\nrounds: 528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.76210334074472,
            "unit": "iter/sec",
            "range": "stddev: 0.00009129786840100713",
            "extra": "mean: 6.907885260869514 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.589077230601086,
            "unit": "iter/sec",
            "range": "stddev: 0.006368373030962796",
            "extra": "mean: 1.697570281199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 265.47380399957683,
            "unit": "iter/sec",
            "range": "stddev: 0.00001154916377067573",
            "extra": "mean: 3.7668500052893887 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 144.82740136201144,
            "unit": "iter/sec",
            "range": "stddev: 0.00009543774315774766",
            "extra": "mean: 6.904770717389273 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8659119226410356,
            "unit": "iter/sec",
            "range": "stddev: 0.013494058671294062",
            "extra": "mean: 1.1548518663999858 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6071.082578297144,
            "unit": "iter/sec",
            "range": "stddev: 0.00004853591972178049",
            "extra": "mean: 164.715268999106 usec\nrounds: 1829"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 89.24218178782135,
            "unit": "iter/sec",
            "range": "stddev: 0.0002457097094950517",
            "extra": "mean: 11.205463380283106 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 512.2541008329811,
            "unit": "iter/sec",
            "range": "stddev: 0.00002078184486315688",
            "extra": "mean: 1.9521561630719808 msec\nrounds: 417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1569382.059994066,
            "unit": "iter/sec",
            "range": "stddev: 9.151614838833801e-8",
            "extra": "mean: 637.1934696410262 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.373251268584916,
            "unit": "iter/sec",
            "range": "stddev: 0.0002368316416493135",
            "extra": "mean: 17.429725140007122 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 235.61533037563837,
            "unit": "iter/sec",
            "range": "stddev: 0.00022353284239667558",
            "extra": "mean: 4.244206004786332 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 395865.0117684949,
            "unit": "iter/sec",
            "range": "stddev: 3.607798937558928e-7",
            "extra": "mean: 2.526113625279943 usec\nrounds: 1989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 247.5881246861135,
            "unit": "iter/sec",
            "range": "stddev: 0.00019850423765920756",
            "extra": "mean: 4.03896592886988 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.33142683405751,
            "unit": "iter/sec",
            "range": "stddev: 0.00013212201013539497",
            "extra": "mean: 9.772169028988701 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1601702.4343786796,
            "unit": "iter/sec",
            "range": "stddev: 1.0843121761174253e-7",
            "extra": "mean: 624.3356934073166 nsec\nrounds: 137006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8701800910323574,
            "unit": "iter/sec",
            "range": "stddev: 0.0016237889256822259",
            "extra": "mean: 1.1491874042000063 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 976.7647902068089,
            "unit": "iter/sec",
            "range": "stddev: 0.00001482272830060018",
            "extra": "mean: 1.0237879272739463 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 413.5304362931836,
            "unit": "iter/sec",
            "range": "stddev: 0.000024016496492584833",
            "extra": "mean: 2.418201690216154 msec\nrounds: 368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 251.91451990300413,
            "unit": "iter/sec",
            "range": "stddev: 0.00010896589647397327",
            "extra": "mean: 3.96960048346969 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5460265.331317287,
            "unit": "iter/sec",
            "range": "stddev: 5.040093051895701e-9",
            "extra": "mean: 183.14128331176585 nsec\nrounds: 52084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.362334334388756,
            "unit": "iter/sec",
            "range": "stddev: 0.017939544498810547",
            "extra": "mean: 29.97392178787784 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.7656117522502,
            "unit": "iter/sec",
            "range": "stddev: 0.000024915362369641697",
            "extra": "mean: 5.821887104168273 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.704148602104,
            "unit": "iter/sec",
            "range": "stddev: 0.00003609658740152692",
            "extra": "mean: 8.149683701752632 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1457.0360745111884,
            "unit": "iter/sec",
            "range": "stddev: 0.000008594321392525872",
            "extra": "mean: 686.3248051943282 usec\nrounds: 1155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15316207681619312,
            "unit": "iter/sec",
            "range": "stddev: 0.12588166025807054",
            "extra": "mean: 6.529031342399992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.266352069682268,
            "unit": "iter/sec",
            "range": "stddev: 0.003220499364867542",
            "extra": "mean: 441.23771120000583 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.11818583314614,
            "unit": "iter/sec",
            "range": "stddev: 0.0005832774241905928",
            "extra": "mean: 10.624939177778161 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 160.9804318413971,
            "unit": "iter/sec",
            "range": "stddev: 0.0006531071629180185",
            "extra": "mean: 6.2119351312539095 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9807.21053240139,
            "unit": "iter/sec",
            "range": "stddev: 0.00001851533972088605",
            "extra": "mean: 101.96579309643313 usec\nrounds: 4751"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.22473464104198,
            "unit": "iter/sec",
            "range": "stddev: 0.00008977696256402714",
            "extra": "mean: 14.657440666664456 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 276.49496184675763,
            "unit": "iter/sec",
            "range": "stddev: 0.00004012991330679826",
            "extra": "mean: 3.6167024285752882 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5213.254609210239,
            "unit": "iter/sec",
            "range": "stddev: 0.00005160522528081602",
            "extra": "mean: 191.8187533433152 usec\nrounds: 2319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6069.35216568594,
            "unit": "iter/sec",
            "range": "stddev: 0.00004982941400680688",
            "extra": "mean: 164.7622304162314 usec\nrounds: 1966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.18557621488735,
            "unit": "iter/sec",
            "range": "stddev: 0.0005573953546577253",
            "extra": "mean: 11.21257542352543 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 331.4133893833158,
            "unit": "iter/sec",
            "range": "stddev: 0.00003088838428314763",
            "extra": "mean: 3.0173795991187027 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.02422019289284,
            "unit": "iter/sec",
            "range": "stddev: 0.00019174156093854696",
            "extra": "mean: 15.145956999998688 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.67548008345109,
            "unit": "iter/sec",
            "range": "stddev: 0.00003405572783667297",
            "extra": "mean: 10.451998768417669 msec\nrounds: 95"
          }
        ]
      }
    ]
  }
}