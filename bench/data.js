window.BENCHMARK_DATA = {
  "lastUpdate": 1677699530991,
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
          "id": "5954618e9d1cbea29ee883f02d2155bf09f786c9",
          "message": "docs: remove duplicate spark backend in install docs",
          "timestamp": "2023-03-01T14:33:58-05:00",
          "tree_id": "42f3a2e52e563defd0aca7adcf31dd7918399666",
          "url": "https://github.com/ibis-project/ibis/commit/5954618e9d1cbea29ee883f02d2155bf09f786c9"
        },
        "date": 1677699446076,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.2589195391707,
            "unit": "iter/sec",
            "range": "stddev: 0.00009471505006346054",
            "extra": "mean: 9.974174912281043 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 93.37597761092529,
            "unit": "iter/sec",
            "range": "stddev: 0.006778211167016129",
            "extra": "mean: 10.709392560972734 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 697.0461663561371,
            "unit": "iter/sec",
            "range": "stddev: 0.00001579045642061477",
            "extra": "mean: 1.4346252059997369 msec\nrounds: 500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 311.55490691886826,
            "unit": "iter/sec",
            "range": "stddev: 0.0002120122619726357",
            "extra": "mean: 3.209707110343825 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11765.471632290277,
            "unit": "iter/sec",
            "range": "stddev: 0.000011125699105392877",
            "extra": "mean: 84.9944678167856 usec\nrounds: 5391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 143.1572415050298,
            "unit": "iter/sec",
            "range": "stddev: 0.0005142715077343081",
            "extra": "mean: 6.9853259918036725 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 311.25703166235115,
            "unit": "iter/sec",
            "range": "stddev: 0.00020296377901087614",
            "extra": "mean: 3.212778823531258 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1763.4708058322708,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051637375066364314",
            "extra": "mean: 567.0635412237798 usec\nrounds: 1504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.25410294459375,
            "unit": "iter/sec",
            "range": "stddev: 0.0005541308061749404",
            "extra": "mean: 9.323652639345541 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5322.20426167623,
            "unit": "iter/sec",
            "range": "stddev: 0.0000356669538833076",
            "extra": "mean: 187.89207456781256 usec\nrounds: 1502"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6339212.549658968,
            "unit": "iter/sec",
            "range": "stddev: 7.405418456246881e-9",
            "extra": "mean: 157.74829951919807 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 258.58628189267955,
            "unit": "iter/sec",
            "range": "stddev: 0.0036708359009916132",
            "extra": "mean: 3.8671811693979476 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 360.9999518749313,
            "unit": "iter/sec",
            "range": "stddev: 0.00003448001569200882",
            "extra": "mean: 2.7700834717741203 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2467137.5783582455,
            "unit": "iter/sec",
            "range": "stddev: 1.6087664336171012e-8",
            "extra": "mean: 405.3280241736616 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1865402.6684282292,
            "unit": "iter/sec",
            "range": "stddev: 9.222953800261116e-8",
            "extra": "mean: 536.077286113561 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.81424976038005,
            "unit": "iter/sec",
            "range": "stddev: 0.000231097711541947",
            "extra": "mean: 3.4987758687272468 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.634926214218,
            "unit": "iter/sec",
            "range": "stddev: 0.00011034570941082384",
            "extra": "mean: 6.638566666656705 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139551.31947422842,
            "unit": "iter/sec",
            "range": "stddev: 5.291619644693087e-7",
            "extra": "mean: 7.165822607536682 usec\nrounds: 40323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 124.63077960174432,
            "unit": "iter/sec",
            "range": "stddev: 0.007156714926192229",
            "extra": "mean: 8.023700110000789 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 144.40584127897034,
            "unit": "iter/sec",
            "range": "stddev: 0.00048041466035934216",
            "extra": "mean: 6.9249276285725205 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 318.83099404484597,
            "unit": "iter/sec",
            "range": "stddev: 0.0001394976107860389",
            "extra": "mean: 3.136457931249126 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.26426364518515,
            "unit": "iter/sec",
            "range": "stddev: 0.015171211047147935",
            "extra": "mean: 29.18492603125067 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8066433044249484,
            "unit": "iter/sec",
            "range": "stddev: 0.0012408767921043323",
            "extra": "mean: 553.5126925999919 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 300.292379675665,
            "unit": "iter/sec",
            "range": "stddev: 0.00020192973667385183",
            "extra": "mean: 3.330087833331182 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.5219764180204,
            "unit": "iter/sec",
            "range": "stddev: 0.00018600535320545603",
            "extra": "mean: 3.2412601903116522 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1691557.8960770196,
            "unit": "iter/sec",
            "range": "stddev: 8.052218819885395e-8",
            "extra": "mean: 591.1710159724076 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.512546771409504,
            "unit": "iter/sec",
            "range": "stddev: 0.0003279142233132788",
            "extra": "mean: 21.047072151513174 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.14217334255586,
            "unit": "iter/sec",
            "range": "stddev: 0.011502286422124043",
            "extra": "mean: 10.736275138461993 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 728703.5647855237,
            "unit": "iter/sec",
            "range": "stddev: 1.8095028634821423e-7",
            "extra": "mean: 1.3723001345469277 usec\nrounds: 25975"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.68809486725682,
            "unit": "iter/sec",
            "range": "stddev: 0.00006907875994366483",
            "extra": "mean: 10.450620857142663 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5359.809614258695,
            "unit": "iter/sec",
            "range": "stddev: 0.00004382760896528236",
            "extra": "mean: 186.5737912293939 usec\nrounds: 2668"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5312291420548436,
            "unit": "iter/sec",
            "range": "stddev: 0.0019379185890042317",
            "extra": "mean: 395.0649838000061 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.933895723719399,
            "unit": "iter/sec",
            "range": "stddev: 0.007460724221075595",
            "extra": "mean: 1.0707833590000064 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.24155665717971,
            "unit": "iter/sec",
            "range": "stddev: 0.01177401121837669",
            "extra": "mean: 9.070989473685675 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.449060069899787,
            "unit": "iter/sec",
            "range": "stddev: 0.0003854492885355249",
            "extra": "mean: 95.70238790000474 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5472.102259145827,
            "unit": "iter/sec",
            "range": "stddev: 0.00005778925396226237",
            "extra": "mean: 182.74512292394476 usec\nrounds: 301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.42484048871785,
            "unit": "iter/sec",
            "range": "stddev: 0.00018935207344228952",
            "extra": "mean: 3.339736270270066 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.700083027546,
            "unit": "iter/sec",
            "range": "stddev: 0.00006611323213478006",
            "extra": "mean: 6.26173750847402 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.26609198115209,
            "unit": "iter/sec",
            "range": "stddev: 0.000096021951959768",
            "extra": "mean: 16.873054500000134 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.87439802060435,
            "unit": "iter/sec",
            "range": "stddev: 0.0006157759361191816",
            "extra": "mean: 24.465192111108536 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.402576083537674,
            "unit": "iter/sec",
            "range": "stddev: 0.00020852801375275456",
            "extra": "mean: 20.24185941860688 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.18076284219872,
            "unit": "iter/sec",
            "range": "stddev: 0.0004930864711674174",
            "extra": "mean: 9.50744197872273 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 135.3460210547594,
            "unit": "iter/sec",
            "range": "stddev: 0.0005223179768318215",
            "extra": "mean: 7.388469880436394 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2569450.117554068,
            "unit": "iter/sec",
            "range": "stddev: 1.894147800154862e-8",
            "extra": "mean: 389.18832989514664 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 132.624866314205,
            "unit": "iter/sec",
            "range": "stddev: 0.0005806577683963646",
            "extra": "mean: 7.540064150797136 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.37455458376758,
            "unit": "iter/sec",
            "range": "stddev: 0.0006121353300054299",
            "extra": "mean: 9.864408323231473 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8557488641503239,
            "unit": "iter/sec",
            "range": "stddev: 0.004402842340839683",
            "extra": "mean: 1.1685671368000043 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.43162440396105,
            "unit": "iter/sec",
            "range": "stddev: 0.00010589495629485775",
            "extra": "mean: 3.4431512134818383 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11742.96309709649,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015044066110727952",
            "extra": "mean: 85.15738248783693 usec\nrounds: 5893"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9233699776377765,
            "unit": "iter/sec",
            "range": "stddev: 0.0033552429546011586",
            "extra": "mean: 1.0829895104000058 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 744.0916375979548,
            "unit": "iter/sec",
            "range": "stddev: 0.000011943411272625862",
            "extra": "mean: 1.343920492411604 msec\nrounds: 593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.915588639422847,
            "unit": "iter/sec",
            "range": "stddev: 0.02990613865291773",
            "extra": "mean: 71.8618540625009 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.79902543930854,
            "unit": "iter/sec",
            "range": "stddev: 0.00018109849134970973",
            "extra": "mean: 9.191258799995694 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.59622754535536,
            "unit": "iter/sec",
            "range": "stddev: 0.000025944085379678616",
            "extra": "mean: 5.112573041666243 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 314.3559589852237,
            "unit": "iter/sec",
            "range": "stddev: 0.00019378749759497107",
            "extra": "mean: 3.1811071857142843 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.45195896461034,
            "unit": "iter/sec",
            "range": "stddev: 0.00007552655339746729",
            "extra": "mean: 8.442241130843332 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13376.818967504758,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015236715631357239",
            "extra": "mean: 74.75618848017757 usec\nrounds: 7205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.0829592604944,
            "unit": "iter/sec",
            "range": "stddev: 0.00006709369045547314",
            "extra": "mean: 13.318601315786967 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.0970211812895,
            "unit": "iter/sec",
            "range": "stddev: 0.000020682205552579846",
            "extra": "mean: 1.8379075074311182 msec\nrounds: 471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.564910014709579,
            "unit": "iter/sec",
            "range": "stddev: 0.00024808440800785713",
            "extra": "mean: 179.69742499999577 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12583988.96376136,
            "unit": "iter/sec",
            "range": "stddev: 2.9002620889263287e-9",
            "extra": "mean: 79.46605824899933 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5845.870835460146,
            "unit": "iter/sec",
            "range": "stddev: 0.000041704334903920086",
            "extra": "mean: 171.0609125904998 usec\nrounds: 2208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8135.893940174674,
            "unit": "iter/sec",
            "range": "stddev: 0.000011835838248984942",
            "extra": "mean: 122.9121234068755 usec\nrounds: 4473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 186.13619675922976,
            "unit": "iter/sec",
            "range": "stddev: 0.004017464710597181",
            "extra": "mean: 5.372410188940932 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 29.08071864311065,
            "unit": "iter/sec",
            "range": "stddev: 0.00015860852814493796",
            "extra": "mean: 34.387045666662175 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 125.93064508808543,
            "unit": "iter/sec",
            "range": "stddev: 0.011302492415403159",
            "extra": "mean: 7.9408788805975234 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7305780.826603046,
            "unit": "iter/sec",
            "range": "stddev: 4.099260710150834e-9",
            "extra": "mean: 136.87790856775678 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5795.451123330104,
            "unit": "iter/sec",
            "range": "stddev: 0.000050576171532563",
            "extra": "mean: 172.5491214953761 usec\nrounds: 2568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 142.96422902775151,
            "unit": "iter/sec",
            "range": "stddev: 0.0005712893659913157",
            "extra": "mean: 6.994756708028586 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5518.078545998129,
            "unit": "iter/sec",
            "range": "stddev: 0.00004828874592399505",
            "extra": "mean: 181.2225019386919 usec\nrounds: 2837"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 497389.24630710913,
            "unit": "iter/sec",
            "range": "stddev: 3.0598232868468677e-7",
            "extra": "mean: 2.010497829264603 usec\nrounds: 2073"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 142.41536238382568,
            "unit": "iter/sec",
            "range": "stddev: 0.0005427289611985176",
            "extra": "mean: 7.021714394159851 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1191.283541441624,
            "unit": "iter/sec",
            "range": "stddev: 0.000012990688690086595",
            "extra": "mean: 839.4307192306682 usec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 311.7895992180322,
            "unit": "iter/sec",
            "range": "stddev: 0.00019513261518342727",
            "extra": "mean: 3.2072910786889564 msec\nrounds: 305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 94.04754664263821,
            "unit": "iter/sec",
            "range": "stddev: 0.013611303733055493",
            "extra": "mean: 10.63291957843195 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.30241628000522,
            "unit": "iter/sec",
            "range": "stddev: 0.00006229943418041858",
            "extra": "mean: 13.642115100000751 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.94994332544339,
            "unit": "iter/sec",
            "range": "stddev: 0.0005615177967265743",
            "extra": "mean: 9.808735222223833 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18143192994426305,
            "unit": "iter/sec",
            "range": "stddev: 0.11072557301973901",
            "extra": "mean: 5.511708993600001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6839934708949058,
            "unit": "iter/sec",
            "range": "stddev: 0.0020328127591325395",
            "extra": "mean: 1.4620022596000013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5903211.556226889,
            "unit": "iter/sec",
            "range": "stddev: 9.411491258794962e-9",
            "extra": "mean: 169.39931602893148 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69352.70037503674,
            "unit": "iter/sec",
            "range": "stddev: 3.9560776735557123e-7",
            "extra": "mean: 14.419049216430315 usec\nrounds: 12821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.41058521927535,
            "unit": "iter/sec",
            "range": "stddev: 0.0006443547691798651",
            "extra": "mean: 10.70542484722223 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 141.45028342640842,
            "unit": "iter/sec",
            "range": "stddev: 0.0005486583004452503",
            "extra": "mean: 7.069621748197235 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5764.5641953812465,
            "unit": "iter/sec",
            "range": "stddev: 0.00004871826406532259",
            "extra": "mean: 173.47365145161052 usec\nrounds: 4031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5617.7380803690885,
            "unit": "iter/sec",
            "range": "stddev: 0.00004762774094820565",
            "extra": "mean: 178.00758698495596 usec\nrounds: 3857"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.24191729679761,
            "unit": "iter/sec",
            "range": "stddev: 0.00008340745095463267",
            "extra": "mean: 14.44211886441003 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5378.690898572124,
            "unit": "iter/sec",
            "range": "stddev: 0.000048967571057658525",
            "extra": "mean: 185.91884509769264 usec\nrounds: 2550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 193.63200192124413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000654063793648837",
            "extra": "mean: 5.164435579232041 msec\nrounds: 183"
          }
        ]
      }
    ]
  }
}