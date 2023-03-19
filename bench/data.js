window.BENCHMARK_DATA = {
  "lastUpdate": 1679229514791,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "17e6a0e5e922afd1323b7f8f698f55d543b7b211",
          "message": "test(backends): strict validate exceptions in test_array",
          "timestamp": "2023-03-19T08:31:52-04:00",
          "tree_id": "7cd305b5400024898b7c679a32ecccd0f56960e5",
          "url": "https://github.com/ibis-project/ibis/commit/17e6a0e5e922afd1323b7f8f698f55d543b7b211"
        },
        "date": 1679229414656,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2924.460777923906,
            "unit": "iter/sec",
            "range": "stddev: 0.0003035280836926364",
            "extra": "mean: 341.94337894656485 usec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 71.08063229761764,
            "unit": "iter/sec",
            "range": "stddev: 0.0016524358190452325",
            "extra": "mean: 14.068529888886713 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3268.556059976263,
            "unit": "iter/sec",
            "range": "stddev: 0.00036801697625258266",
            "extra": "mean: 305.9454944784585 usec\nrounds: 2083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1321.0485214938117,
            "unit": "iter/sec",
            "range": "stddev: 0.00023618100857158915",
            "extra": "mean: 756.9744666677517 usec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6938277243954143,
            "unit": "iter/sec",
            "range": "stddev: 0.03211237665610233",
            "extra": "mean: 590.3788122000037 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3658.862964932082,
            "unit": "iter/sec",
            "range": "stddev: 0.00013304460302866365",
            "extra": "mean: 273.3089513284252 usec\nrounds: 452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 208.44092811837177,
            "unit": "iter/sec",
            "range": "stddev: 0.0007689861692923396",
            "extra": "mean: 4.79752229577537 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3576.443898031755,
            "unit": "iter/sec",
            "range": "stddev: 0.0001361753057225211",
            "extra": "mean: 279.6073497896432 usec\nrounds: 1904"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.752336548073699,
            "unit": "iter/sec",
            "range": "stddev: 0.019259479077732792",
            "extra": "mean: 266.5006155999947 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 121.53604157541803,
            "unit": "iter/sec",
            "range": "stddev: 0.004206951730896388",
            "extra": "mean: 8.228011929938162 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 208.02197686229235,
            "unit": "iter/sec",
            "range": "stddev: 0.0014509802663285978",
            "extra": "mean: 4.80718439024347 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3379.543645756026,
            "unit": "iter/sec",
            "range": "stddev: 0.0003646507066079492",
            "extra": "mean: 295.8979391361858 usec\nrounds: 1528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 567.469776496022,
            "unit": "iter/sec",
            "range": "stddev: 0.00029027497333302446",
            "extra": "mean: 1.7622083878629442 msec\nrounds: 379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.93044009915152,
            "unit": "iter/sec",
            "range": "stddev: 0.002740033963140443",
            "extra": "mean: 21.308131734696424 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 193.1285522508263,
            "unit": "iter/sec",
            "range": "stddev: 0.0006579307972515009",
            "extra": "mean: 5.177898287671349 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 85.04674111058375,
            "unit": "iter/sec",
            "range": "stddev: 0.0010112530412519974",
            "extra": "mean: 11.75824008000177 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 28.200318490165046,
            "unit": "iter/sec",
            "range": "stddev: 0.002732305357267228",
            "extra": "mean: 35.4605924166691 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 64.71006114259738,
            "unit": "iter/sec",
            "range": "stddev: 0.015804522528639623",
            "extra": "mean: 15.453547444443986 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 84.60653022425169,
            "unit": "iter/sec",
            "range": "stddev: 0.0014008749867773296",
            "extra": "mean: 11.819418635292992 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 25.538506444825735,
            "unit": "iter/sec",
            "range": "stddev: 0.003515817767562681",
            "extra": "mean: 39.15655765384848 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 83.06341776845296,
            "unit": "iter/sec",
            "range": "stddev: 0.002302626389913352",
            "extra": "mean: 12.038994142855923 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5285434448130747,
            "unit": "iter/sec",
            "range": "stddev: 0.02587823060044719",
            "extra": "mean: 1.891992058199986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 74.61304988376008,
            "unit": "iter/sec",
            "range": "stddev: 0.001595641787520046",
            "extra": "mean: 13.402481222224575 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0234601965555452,
            "unit": "iter/sec",
            "range": "stddev: 0.035496358534564024",
            "extra": "mean: 977.0775682000135 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 80.92970909433292,
            "unit": "iter/sec",
            "range": "stddev: 0.0026754828048002398",
            "extra": "mean: 12.356401761365342 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1248649.7240316528,
            "unit": "iter/sec",
            "range": "stddev: 0.000012064795304668915",
            "extra": "mean: 800.865111130758 nsec\nrounds: 54645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 345.17146002984254,
            "unit": "iter/sec",
            "range": "stddev: 0.0007780579092365936",
            "extra": "mean: 2.897110902255774 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 68.08405789674539,
            "unit": "iter/sec",
            "range": "stddev: 0.002127522132294384",
            "extra": "mean: 14.687726185718475 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 121.60023120036278,
            "unit": "iter/sec",
            "range": "stddev: 0.002248195829878586",
            "extra": "mean: 8.223668574710873 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 188.6052399900716,
            "unit": "iter/sec",
            "range": "stddev: 0.0013436844791249627",
            "extra": "mean: 5.302079624365904 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 209.46624509639733,
            "unit": "iter/sec",
            "range": "stddev: 0.0008024477253621514",
            "extra": "mean: 4.774038888890166 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3620.2517061466124,
            "unit": "iter/sec",
            "range": "stddev: 0.00012091895914237122",
            "extra": "mean: 276.22388749991023 usec\nrounds: 3120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 85.42270814116935,
            "unit": "iter/sec",
            "range": "stddev: 0.0018722896339153504",
            "extra": "mean: 11.706489079547826 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5324814659059021,
            "unit": "iter/sec",
            "range": "stddev: 0.027447672930399007",
            "extra": "mean: 1.8779996375999986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 491.9168157998895,
            "unit": "iter/sec",
            "range": "stddev: 0.0004618931399777311",
            "extra": "mean: 2.0328640287970914 msec\nrounds: 382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 70.83887065151518,
            "unit": "iter/sec",
            "range": "stddev: 0.001945068216635298",
            "extra": "mean: 14.116543513509711 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 80.3833856791546,
            "unit": "iter/sec",
            "range": "stddev: 0.0019026781092918357",
            "extra": "mean: 12.440381697673686 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 207.57757708883932,
            "unit": "iter/sec",
            "range": "stddev: 0.0009688524721836984",
            "extra": "mean: 4.817476020408595 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 604459.3150001417,
            "unit": "iter/sec",
            "range": "stddev: 0.00000925079761446323",
            "extra": "mean: 1.6543710638320888 usec\nrounds: 22422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 21.793229901312188,
            "unit": "iter/sec",
            "range": "stddev: 0.039315012920299604",
            "extra": "mean: 45.8858097000018 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 83.87568692177817,
            "unit": "iter/sec",
            "range": "stddev: 0.002137503474429297",
            "extra": "mean: 11.922406083333689 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 53.3526554519771,
            "unit": "iter/sec",
            "range": "stddev: 0.0013508050608573778",
            "extra": "mean: 18.74320952778261 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 115.82485830625193,
            "unit": "iter/sec",
            "range": "stddev: 0.0010208428880386043",
            "extra": "mean: 8.633725217741299 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2974.051726970654,
            "unit": "iter/sec",
            "range": "stddev: 0.00021749627152810354",
            "extra": "mean: 336.24162987191625 usec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 92.1876979634566,
            "unit": "iter/sec",
            "range": "stddev: 0.0010479361409812121",
            "extra": "mean: 10.847434333335908 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 79.90680060567671,
            "unit": "iter/sec",
            "range": "stddev: 0.001259183294066553",
            "extra": "mean: 12.514579390242266 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 772.7249116691577,
            "unit": "iter/sec",
            "range": "stddev: 0.0006764286798679904",
            "extra": "mean: 1.2941216012305168 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3414.9409400074906,
            "unit": "iter/sec",
            "range": "stddev: 0.00028084324746917267",
            "extra": "mean: 292.8308329683167 usec\nrounds: 1826"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 110.57186750747242,
            "unit": "iter/sec",
            "range": "stddev: 0.0009775051184275519",
            "extra": "mean: 9.043891746989082 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 21.70172678286049,
            "unit": "iter/sec",
            "range": "stddev: 0.037612029108551645",
            "extra": "mean: 46.07928253846493 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 47.01990347448984,
            "unit": "iter/sec",
            "range": "stddev: 0.0026129117276150935",
            "extra": "mean: 21.26758938462176 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.502642960522082,
            "unit": "iter/sec",
            "range": "stddev: 0.028225650885187213",
            "extra": "mean: 1.9894837459999963 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 107275.80967119259,
            "unit": "iter/sec",
            "range": "stddev: 0.00009559577806220778",
            "extra": "mean: 9.321766044600976 usec\nrounds: 22936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 6634.2649469784965,
            "unit": "iter/sec",
            "range": "stddev: 0.00023796301157777904",
            "extra": "mean: 150.73259931462928 usec\nrounds: 2920"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 166.4564910718479,
            "unit": "iter/sec",
            "range": "stddev: 0.003955275813962647",
            "extra": "mean: 6.00757587499768 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3793471.0124227353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017702164341158797",
            "extra": "mean: 263.610818884714 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 69.14128854297776,
            "unit": "iter/sec",
            "range": "stddev: 0.0023308494286152916",
            "extra": "mean: 14.46313803333889 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 211.25099128164854,
            "unit": "iter/sec",
            "range": "stddev: 0.0009609563268822376",
            "extra": "mean: 4.733705597938515 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 77.09873229924607,
            "unit": "iter/sec",
            "range": "stddev: 0.002190264829944991",
            "extra": "mean: 12.970381875004952 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4578304.157053605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011582019162255324",
            "extra": "mean: 218.42148658008693 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 191.73706182264934,
            "unit": "iter/sec",
            "range": "stddev: 0.001142981607450256",
            "extra": "mean: 5.2154757692332225 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 194.49599540956265,
            "unit": "iter/sec",
            "range": "stddev: 0.001243916127536013",
            "extra": "mean: 5.141494033819236 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 385039.67660263606,
            "unit": "iter/sec",
            "range": "stddev: 0.000002428136229000736",
            "extra": "mean: 2.597134946775908 usec\nrounds: 1571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1443960.0192370494,
            "unit": "iter/sec",
            "range": "stddev: 0.000003903759343995928",
            "extra": "mean: 692.5399503293546 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3158.1097637276284,
            "unit": "iter/sec",
            "range": "stddev: 0.00045785565984833516",
            "extra": "mean: 316.64510571654887 usec\nrounds: 1627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 59.41003875086026,
            "unit": "iter/sec",
            "range": "stddev: 0.0020730925427064305",
            "extra": "mean: 16.832172155173357 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1387194.9788586926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025688339877262478",
            "extra": "mean: 720.8791952395508 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09709361311782606,
            "unit": "iter/sec",
            "range": "stddev: 0.2823383677982596",
            "extra": "mean: 10.299338626799988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 52942.009478956075,
            "unit": "iter/sec",
            "range": "stddev: 0.000024212972633031842",
            "extra": "mean: 18.88859168440688 usec\nrounds: 11136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5492.36288102736,
            "unit": "iter/sec",
            "range": "stddev: 0.00013071415621182292",
            "extra": "mean: 182.07099961555116 usec\nrounds: 2604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 67.30336662721452,
            "unit": "iter/sec",
            "range": "stddev: 0.002819561543639888",
            "extra": "mean: 14.858097746267035 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 72.14152500735918,
            "unit": "iter/sec",
            "range": "stddev: 0.0023247168284958467",
            "extra": "mean: 13.861642097224724 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9053.124498740222,
            "unit": "iter/sec",
            "range": "stddev: 0.0001549962959973991",
            "extra": "mean: 110.4591017321317 usec\nrounds: 5023"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 194.24369167118417,
            "unit": "iter/sec",
            "range": "stddev: 0.0010859625174861472",
            "extra": "mean: 5.1481723364936895 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4101553.0356032695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012206085726603937",
            "extra": "mean: 243.8100864036998 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4510158568089066,
            "unit": "iter/sec",
            "range": "stddev: 0.08651970945281347",
            "extra": "mean: 2.217216944600011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.516053048783684,
            "unit": "iter/sec",
            "range": "stddev: 0.002181593054366654",
            "extra": "mean: 86.83530683332681 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 36.68379126823224,
            "unit": "iter/sec",
            "range": "stddev: 0.0043367661094106036",
            "extra": "mean: 27.259995911763593 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 76.42620600462818,
            "unit": "iter/sec",
            "range": "stddev: 0.0025643490608242806",
            "extra": "mean: 13.084517108430612 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 120.6711830578624,
            "unit": "iter/sec",
            "range": "stddev: 0.0011819436374424447",
            "extra": "mean: 8.286982647054147 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 5.976688382898078,
            "unit": "iter/sec",
            "range": "stddev: 0.06839324541501132",
            "extra": "mean: 167.31673728572463 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8963.670452492057,
            "unit": "iter/sec",
            "range": "stddev: 0.00009410540715211955",
            "extra": "mean: 111.56144185577266 usec\nrounds: 5323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8430385.806663575,
            "unit": "iter/sec",
            "range": "stddev: 3.072634049084134e-7",
            "extra": "mean: 118.61853335463327 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1447021.087077531,
            "unit": "iter/sec",
            "range": "stddev: 0.000004397578824138084",
            "extra": "mean: 691.0749324459708 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 65.14780545638342,
            "unit": "iter/sec",
            "range": "stddev: 0.0016992942550567436",
            "extra": "mean: 15.349711214286442 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 223.86590132535264,
            "unit": "iter/sec",
            "range": "stddev: 0.0016208927352774555",
            "extra": "mean: 4.466959881249011 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.5589966482667,
            "unit": "iter/sec",
            "range": "stddev: 0.004696427139319514",
            "extra": "mean: 60.390132400001065 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 66.40469150295685,
            "unit": "iter/sec",
            "range": "stddev: 0.0013468177122550305",
            "extra": "mean: 15.059176955222693 msec\nrounds: 67"
          }
        ]
      }
    ]
  }
}