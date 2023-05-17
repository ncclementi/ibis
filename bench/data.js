window.BENCHMARK_DATA = {
  "lastUpdate": 1684356347983,
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
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "47de1c3e89015f4f778231de182db2b307c4b8ae",
          "message": "fix(duckdb): ensure that quoted struct field names work",
          "timestamp": "2023-05-17T15:37:30-05:00",
          "tree_id": "cb9efa3aac5453109d25cf68c374ef01575aa20b",
          "url": "https://github.com/ibis-project/ibis/commit/47de1c3e89015f4f778231de182db2b307c4b8ae"
        },
        "date": 1684356266455,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.04214967164607,
            "unit": "iter/sec",
            "range": "stddev: 0.0007759257794862689",
            "extra": "mean: 9.896859906976175 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 246.8916458347449,
            "unit": "iter/sec",
            "range": "stddev: 0.007427886405356531",
            "extra": "mean: 4.050359811159194 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.21946479289863,
            "unit": "iter/sec",
            "range": "stddev: 0.0006442172643718729",
            "extra": "mean: 9.240481847823922 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 97.27684812638047,
            "unit": "iter/sec",
            "range": "stddev: 0.0006463497680193991",
            "extra": "mean: 10.279938333331037 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2155.1825096823595,
            "unit": "iter/sec",
            "range": "stddev: 0.00009800073119613795",
            "extra": "mean: 463.99782640560886 usec\nrounds: 1227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.7811978484314,
            "unit": "iter/sec",
            "range": "stddev: 0.00009544942122854266",
            "extra": "mean: 9.453475857144765 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.71127244582375,
            "unit": "iter/sec",
            "range": "stddev: 0.0006929711328126882",
            "extra": "mean: 23.413022903226068 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.4087728392164,
            "unit": "iter/sec",
            "range": "stddev: 0.0006584389615920486",
            "extra": "mean: 9.577739234038727 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.3493072197324,
            "unit": "iter/sec",
            "range": "stddev: 0.0006618941856384742",
            "extra": "mean: 9.315383824071713 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.65282631903573,
            "unit": "iter/sec",
            "range": "stddev: 0.00008746767438680993",
            "extra": "mean: 8.956333959183528 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11622708.111196976,
            "unit": "iter/sec",
            "range": "stddev: 3.196192691047452e-9",
            "extra": "mean: 86.03846800871966 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4585.914257891745,
            "unit": "iter/sec",
            "range": "stddev: 0.000023732449267174077",
            "extra": "mean: 218.05902678601848 usec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.69696589953274,
            "unit": "iter/sec",
            "range": "stddev: 0.000833923696685596",
            "extra": "mean: 10.341586115938641 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10456.803737994327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017078907730941342",
            "extra": "mean: 95.63151657581034 usec\nrounds: 4404"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13988.735782898431,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014481298354954476",
            "extra": "mean: 71.48608820123147 usec\nrounds: 1780"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.50574204270818,
            "unit": "iter/sec",
            "range": "stddev: 0.029543659438798015",
            "extra": "mean: 32.78071382758024 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.06717227371836,
            "unit": "iter/sec",
            "range": "stddev: 0.00004106875712044038",
            "extra": "mean: 9.085361051278484 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1673066240121058,
            "unit": "iter/sec",
            "range": "stddev: 0.06940352178828788",
            "extra": "mean: 5.977049659000011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2259.363132360553,
            "unit": "iter/sec",
            "range": "stddev: 0.00008364509923146644",
            "extra": "mean: 442.6026014486715 usec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 288.598601984872,
            "unit": "iter/sec",
            "range": "stddev: 0.000259050737791434",
            "extra": "mean: 3.4650202500025236 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.90958607000354,
            "unit": "iter/sec",
            "range": "stddev: 0.0007434180334023838",
            "extra": "mean: 9.812619583334211 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1768.96164198273,
            "unit": "iter/sec",
            "range": "stddev: 0.00013328200921088417",
            "extra": "mean: 565.3033826551241 usec\nrounds: 392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2181.731065724255,
            "unit": "iter/sec",
            "range": "stddev: 0.00008123051053734162",
            "extra": "mean: 458.3516344935192 usec\nrounds: 1264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 274.9971889356397,
            "unit": "iter/sec",
            "range": "stddev: 0.00026737795722460824",
            "extra": "mean: 3.6364008078425836 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1881838.4359632058,
            "unit": "iter/sec",
            "range": "stddev: 9.332431318205497e-8",
            "extra": "mean: 531.3952467381489 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.39012615791471,
            "unit": "iter/sec",
            "range": "stddev: 0.0002863202335568398",
            "extra": "mean: 10.374506599998767 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 273.8681725758433,
            "unit": "iter/sec",
            "range": "stddev: 0.00911155158678882",
            "extra": "mean: 3.651391801371393 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 101.08521828665205,
            "unit": "iter/sec",
            "range": "stddev: 0.0008004018699788086",
            "extra": "mean: 9.892643226670923 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 188.98184691684708,
            "unit": "iter/sec",
            "range": "stddev: 0.00022682644211309818",
            "extra": "mean: 5.291513530609132 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 102.69987526016415,
            "unit": "iter/sec",
            "range": "stddev: 0.0006962177547356392",
            "extra": "mean: 9.737110171426723 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.04092227130411,
            "unit": "iter/sec",
            "range": "stddev: 0.0007236125105620161",
            "extra": "mean: 15.615015595240525 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1919746.3543822204,
            "unit": "iter/sec",
            "range": "stddev: 8.988716999179871e-8",
            "extra": "mean: 520.9021482016581 nsec\nrounds: 156226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.77969511485159,
            "unit": "iter/sec",
            "range": "stddev: 0.03786159785659464",
            "extra": "mean: 27.188914885708268 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.08064705935738,
            "unit": "iter/sec",
            "range": "stddev: 0.00026735146988061026",
            "extra": "mean: 20.374629511110875 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 166.68377177699895,
            "unit": "iter/sec",
            "range": "stddev: 0.00011591019370515873",
            "extra": "mean: 5.999384279219869 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.67990381435713,
            "unit": "iter/sec",
            "range": "stddev: 0.0006671623893836344",
            "extra": "mean: 9.462537000001934 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5557470.553568539,
            "unit": "iter/sec",
            "range": "stddev: 3.010948713889008e-8",
            "extra": "mean: 179.9379754443133 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 105.60230917178737,
            "unit": "iter/sec",
            "range": "stddev: 0.00017824066218425562",
            "extra": "mean: 9.469489898873908 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2522648.537853094,
            "unit": "iter/sec",
            "range": "stddev: 1.516717404119398e-8",
            "extra": "mean: 396.4087684015112 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4520179.877964616,
            "unit": "iter/sec",
            "range": "stddev: 1.1838600322174766e-8",
            "extra": "mean: 221.23013397621557 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.92670066793445,
            "unit": "iter/sec",
            "range": "stddev: 0.0038577892561290268",
            "extra": "mean: 1.079097096399994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2219.830073682447,
            "unit": "iter/sec",
            "range": "stddev: 0.00007894884382631678",
            "extra": "mean: 450.4849320926232 usec\nrounds: 1075"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.18233655453182,
            "unit": "iter/sec",
            "range": "stddev: 0.0008087777079074872",
            "extra": "mean: 9.883147929293509 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7187572.885828509,
            "unit": "iter/sec",
            "range": "stddev: 4.3317854236393576e-9",
            "extra": "mean: 139.12902392578425 nsec\nrounds: 71429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 430.88160788005484,
            "unit": "iter/sec",
            "range": "stddev: 0.00008627890056640487",
            "extra": "mean: 2.320823125684148 msec\nrounds: 366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.8614276233323,
            "unit": "iter/sec",
            "range": "stddev: 0.0009600683075792853",
            "extra": "mean: 40.22295159999203 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1020295.5815186264,
            "unit": "iter/sec",
            "range": "stddev: 1.6505235620441333e-7",
            "extra": "mean: 980.1081354401064 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7698074875642785,
            "unit": "iter/sec",
            "range": "stddev: 0.005926330220090506",
            "extra": "mean: 1.2990260761999934 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.58639246308253,
            "unit": "iter/sec",
            "range": "stddev: 0.0007060546147103953",
            "extra": "mean: 9.747881526878597 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 104.58456874115542,
            "unit": "iter/sec",
            "range": "stddev: 0.0007695298283126713",
            "extra": "mean: 9.56164003960258 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6281664.161946094,
            "unit": "iter/sec",
            "range": "stddev: 4.69331722242478e-9",
            "extra": "mean: 159.19348348132726 nsec\nrounds: 62894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.936293392560597,
            "unit": "iter/sec",
            "range": "stddev: 0.004916216314154517",
            "extra": "mean: 1.0680412869999827 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 177.30774448785056,
            "unit": "iter/sec",
            "range": "stddev: 0.00033059047009332453",
            "extra": "mean: 5.639911572325718 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.06556264681828,
            "unit": "iter/sec",
            "range": "stddev: 0.00007184030038451489",
            "extra": "mean: 6.1325026803230545 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 284.54161791572994,
            "unit": "iter/sec",
            "range": "stddev: 0.00027642531713188684",
            "extra": "mean: 3.514424383065681 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 248.94515870863862,
            "unit": "iter/sec",
            "range": "stddev: 0.00048221676056884016",
            "extra": "mean: 4.016948974574693 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 127.61266345278541,
            "unit": "iter/sec",
            "range": "stddev: 0.0001794115649195786",
            "extra": "mean: 7.836212903510031 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1938714.971529961,
            "unit": "iter/sec",
            "range": "stddev: 7.296306398349201e-8",
            "extra": "mean: 515.8055798222043 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2218.932450762162,
            "unit": "iter/sec",
            "range": "stddev: 0.00011545627097844819",
            "extra": "mean: 450.6671663918921 usec\nrounds: 1214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6087755410994715,
            "unit": "iter/sec",
            "range": "stddev: 0.0007389482111992734",
            "extra": "mean: 621.5907529999981 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.7291728127427,
            "unit": "iter/sec",
            "range": "stddev: 0.00004654548512583862",
            "extra": "mean: 1.464709638640676 msec\nrounds: 559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1195.5614441904065,
            "unit": "iter/sec",
            "range": "stddev: 0.000009407407785932393",
            "extra": "mean: 836.4271069958816 usec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.536167425157433,
            "unit": "iter/sec",
            "range": "stddev: 0.0032364363368253437",
            "extra": "mean: 394.29573540001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2196.2605221365907,
            "unit": "iter/sec",
            "range": "stddev: 0.00008407090813570451",
            "extra": "mean: 455.3193894443674 usec\nrounds: 1099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 99.80867473400751,
            "unit": "iter/sec",
            "range": "stddev: 0.0006297109285876236",
            "extra": "mean: 10.019169202126205 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 76.7992441562675,
            "unit": "iter/sec",
            "range": "stddev: 0.027336814205158533",
            "extra": "mean: 13.020961481928738 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3669637584690186,
            "unit": "iter/sec",
            "range": "stddev: 0.0008247567461979253",
            "extra": "mean: 731.548290000012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 214.71926140424287,
            "unit": "iter/sec",
            "range": "stddev: 0.004442811909991876",
            "extra": "mean: 4.657244037913032 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6091886.615215408,
            "unit": "iter/sec",
            "range": "stddev: 8.689604469116264e-9",
            "extra": "mean: 164.15275975423225 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.390874262674053,
            "unit": "iter/sec",
            "range": "stddev: 0.0006537015006083405",
            "extra": "mean: 51.570650526310885 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2205.699992567552,
            "unit": "iter/sec",
            "range": "stddev: 0.00008213422824780329",
            "extra": "mean: 453.37081351482755 usec\nrounds: 1169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 154.76521288109402,
            "unit": "iter/sec",
            "range": "stddev: 0.004331808205014471",
            "extra": "mean: 6.4614003456209455 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 274.25708955120314,
            "unit": "iter/sec",
            "range": "stddev: 0.00033255659029813694",
            "extra": "mean: 3.646213855898527 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2139.9738113687804,
            "unit": "iter/sec",
            "range": "stddev: 0.00008798204235212173",
            "extra": "mean: 467.29543823733763 usec\nrounds: 1611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.69491037994971,
            "unit": "iter/sec",
            "range": "stddev: 0.00040732621854831016",
            "extra": "mean: 19.344264119042908 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 223.00860431490787,
            "unit": "iter/sec",
            "range": "stddev: 0.015331169660809564",
            "extra": "mean: 4.484131915322476 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 282.6161133980123,
            "unit": "iter/sec",
            "range": "stddev: 0.000242735675357888",
            "extra": "mean: 3.538368665454279 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.87442907132838,
            "unit": "iter/sec",
            "range": "stddev: 0.000861039901880428",
            "extra": "mean: 9.913315090912677 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.62730500719385,
            "unit": "iter/sec",
            "range": "stddev: 0.0009449884416277739",
            "extra": "mean: 10.567774279569486 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.3771498514792,
            "unit": "iter/sec",
            "range": "stddev: 0.000013915993549817171",
            "extra": "mean: 1.3220917636080862 msec\nrounds: 643"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.36369175703365,
            "unit": "iter/sec",
            "range": "stddev: 0.0000429587092961049",
            "extra": "mean: 5.015958478631651 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 236.52170021862847,
            "unit": "iter/sec",
            "range": "stddev: 0.00029184198355016887",
            "extra": "mean: 4.227941872038175 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.648440171894732,
            "unit": "iter/sec",
            "range": "stddev: 0.00009715538865833581",
            "extra": "mean: 115.6277872222265 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12569.790211634861,
            "unit": "iter/sec",
            "range": "stddev: 0.000011825279826606457",
            "extra": "mean: 79.55582258440391 usec\nrounds: 4171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.2319209202232,
            "unit": "iter/sec",
            "range": "stddev: 0.00002674727317227625",
            "extra": "mean: 1.8544896197789178 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.129933591074067,
            "unit": "iter/sec",
            "range": "stddev: 0.00006809768914364567",
            "extra": "mean: 33.18958526666809 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2193.167953528718,
            "unit": "iter/sec",
            "range": "stddev: 0.00008272638748999066",
            "extra": "mean: 455.96143167742383 usec\nrounds: 1288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.130171883076336,
            "unit": "iter/sec",
            "range": "stddev: 0.0005116183809216027",
            "extra": "mean: 17.503885723407564 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.54832777239824,
            "unit": "iter/sec",
            "range": "stddev: 0.0007532889591269224",
            "extra": "mean: 9.847527989247785 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150674.90902912218,
            "unit": "iter/sec",
            "range": "stddev: 3.025751341664007e-7",
            "extra": "mean: 6.636805068896519 usec\nrounds: 41153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.05060778544393,
            "unit": "iter/sec",
            "range": "stddev: 0.0006792975016862165",
            "extra": "mean: 11.75770551249542 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8585.335075889867,
            "unit": "iter/sec",
            "range": "stddev: 0.00002047712414958743",
            "extra": "mean: 116.4776902893741 usec\nrounds: 3697"
          }
        ]
      }
    ]
  }
}