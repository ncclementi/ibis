window.BENCHMARK_DATA = {
  "lastUpdate": 1675962259233,
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
          "id": "58ec47d3a6cafc07b06a31e29cdfd22dcb9099dc",
          "message": "chore(docs): better examples\n\nCo-authored-by: Gil Forsyth <gforsyth@users.noreply.github.com>",
          "timestamp": "2023-02-09T11:58:49-05:00",
          "tree_id": "591ce79b69751f0d215c081efdcef39ca7f0a0c0",
          "url": "https://github.com/ibis-project/ibis/commit/58ec47d3a6cafc07b06a31e29cdfd22dcb9099dc"
        },
        "date": 1675962176955,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7587951857022331,
            "unit": "iter/sec",
            "range": "stddev: 0.003185253224946785",
            "extra": "mean: 1.3178786830000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119880.70273562553,
            "unit": "iter/sec",
            "range": "stddev: 3.646258229107814e-7",
            "extra": "mean: 8.341626109794444 usec\nrounds: 33114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.75061075629155,
            "unit": "iter/sec",
            "range": "stddev: 0.0005782203505559419",
            "extra": "mean: 11.019209586208456 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.507894775037826,
            "unit": "iter/sec",
            "range": "stddev: 0.0006916135440098605",
            "extra": "mean: 16.258075547170847 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57262.9821953724,
            "unit": "iter/sec",
            "range": "stddev: 6.357891656543633e-7",
            "extra": "mean: 17.463288876366157 usec\nrounds: 12469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 254.06715679563436,
            "unit": "iter/sec",
            "range": "stddev: 0.00020313355199023028",
            "extra": "mean: 3.9359672167480366 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 150.38688776570007,
            "unit": "iter/sec",
            "range": "stddev: 0.00501308186085247",
            "extra": "mean: 6.649515891026225 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 250.87082869199926,
            "unit": "iter/sec",
            "range": "stddev: 0.0002306384494818211",
            "extra": "mean: 3.9861151063829996 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10238.279964667994,
            "unit": "iter/sec",
            "range": "stddev: 0.00002532069506790024",
            "extra": "mean: 97.67265629099525 usec\nrounds: 4594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.075986775165655,
            "unit": "iter/sec",
            "range": "stddev: 0.000316383735174005",
            "extra": "mean: 110.18085688889163 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.0121858219155,
            "unit": "iter/sec",
            "range": "stddev: 0.00011959870104111714",
            "extra": "mean: 8.195902673685097 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5149.914521655922,
            "unit": "iter/sec",
            "range": "stddev: 0.00004454637142158156",
            "extra": "mean: 194.17798019654438 usec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.841137371747696,
            "unit": "iter/sec",
            "range": "stddev: 0.012440420547212845",
            "extra": "mean: 31.40591331034831 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 243.16275586515965,
            "unit": "iter/sec",
            "range": "stddev: 0.00016804089597648506",
            "extra": "mean: 4.112471897441923 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 157.01401521092126,
            "unit": "iter/sec",
            "range": "stddev: 0.0006284959291293008",
            "extra": "mean: 6.368858210884375 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.96887514378803,
            "unit": "iter/sec",
            "range": "stddev: 0.0001701084924303013",
            "extra": "mean: 10.312587399999984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.42882479325337,
            "unit": "iter/sec",
            "range": "stddev: 0.000045716190822098697",
            "extra": "mean: 5.9021834166663 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5538920.856787872,
            "unit": "iter/sec",
            "range": "stddev: 6.11338147760504e-9",
            "extra": "mean: 180.54058287813018 nsec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11073.135894561316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017469029946042854",
            "extra": "mean: 90.30865416283388 usec\nrounds: 5225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 629.5728674091594,
            "unit": "iter/sec",
            "range": "stddev: 0.000015151143444602307",
            "extra": "mean: 1.5883784892370532 msec\nrounds: 511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.16190361786944,
            "unit": "iter/sec",
            "range": "stddev: 0.000629713654401789",
            "extra": "mean: 12.171090931034726 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 384743.9954645953,
            "unit": "iter/sec",
            "range": "stddev: 3.0474175644717715e-7",
            "extra": "mean: 2.5991308812823863 usec\nrounds: 1849"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 270.42469054888267,
            "unit": "iter/sec",
            "range": "stddev: 0.00008765525721804011",
            "extra": "mean: 3.6978871935483917 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.38984203649136,
            "unit": "iter/sec",
            "range": "stddev: 0.00010456594141286888",
            "extra": "mean: 7.022972886954409 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 267.9546112216792,
            "unit": "iter/sec",
            "range": "stddev: 0.00001452749431062494",
            "extra": "mean: 3.7319753350790394 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8777348970595102,
            "unit": "iter/sec",
            "range": "stddev: 0.0033217824124175325",
            "extra": "mean: 1.1392961625999931 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.19742923131093,
            "unit": "iter/sec",
            "range": "stddev: 0.00014082816206577526",
            "extra": "mean: 6.983365590905066 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.92068908295387,
            "unit": "iter/sec",
            "range": "stddev: 0.000591874709566521",
            "extra": "mean: 11.245976727273254 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 223.14851146587958,
            "unit": "iter/sec",
            "range": "stddev: 0.00040260686725639307",
            "extra": "mean: 4.481320504586491 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 158.73713482811252,
            "unit": "iter/sec",
            "range": "stddev: 0.0006573603470428294",
            "extra": "mean: 6.299723130840452 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1594140.6129948292,
            "unit": "iter/sec",
            "range": "stddev: 7.879384710455032e-8",
            "extra": "mean: 627.2972357948726 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.34107750811441,
            "unit": "iter/sec",
            "range": "stddev: 0.0007199388257528691",
            "extra": "mean: 11.449366421053085 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5934158689780489,
            "unit": "iter/sec",
            "range": "stddev: 0.0018064139604256112",
            "extra": "mean: 627.5825535999957 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.477017204557393,
            "unit": "iter/sec",
            "range": "stddev: 0.00022230640560465798",
            "extra": "mean: 74.20039500000338 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 143.86807182719167,
            "unit": "iter/sec",
            "range": "stddev: 0.00005685459417191629",
            "extra": "mean: 6.950812555555469 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.00324854423402,
            "unit": "iter/sec",
            "range": "stddev: 0.00019279190732088018",
            "extra": "mean: 23.254057166666833 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 83.92164794090945,
            "unit": "iter/sec",
            "range": "stddev: 0.011642350039939355",
            "extra": "mean: 11.915876588888194 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 578300.6563792371,
            "unit": "iter/sec",
            "range": "stddev: 2.133040936610171e-7",
            "extra": "mean: 1.7292043316378696 usec\nrounds: 22625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 986.3663873056548,
            "unit": "iter/sec",
            "range": "stddev: 0.000019696451679609922",
            "extra": "mean: 1.013822057269801 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6014.5436125205,
            "unit": "iter/sec",
            "range": "stddev: 0.000048556665488774216",
            "extra": "mean: 166.26365430592205 usec\nrounds: 2427"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.55318164465405,
            "unit": "iter/sec",
            "range": "stddev: 0.00023662185599226574",
            "extra": "mean: 18.000769179999452 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5262.97836614451,
            "unit": "iter/sec",
            "range": "stddev: 0.000046836173884534745",
            "extra": "mean: 190.00648120325982 usec\nrounds: 2261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9781.08289516782,
            "unit": "iter/sec",
            "range": "stddev: 0.000014229325245184111",
            "extra": "mean: 102.23816838256563 usec\nrounds: 4371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6097.871129114552,
            "unit": "iter/sec",
            "range": "stddev: 0.000045509363949890645",
            "extra": "mean: 163.99165853562502 usec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.21797293384437,
            "unit": "iter/sec",
            "range": "stddev: 0.00045039311153173556",
            "extra": "mean: 15.10164016949082 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6047.786757318213,
            "unit": "iter/sec",
            "range": "stddev: 0.000047442396148695964",
            "extra": "mean: 165.34974530805593 usec\nrounds: 2238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.12718143590517,
            "unit": "iter/sec",
            "range": "stddev: 0.00035680830948849366",
            "extra": "mean: 11.477474463415838 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.94212328364686,
            "unit": "iter/sec",
            "range": "stddev: 0.0006723389835252208",
            "extra": "mean: 10.644852011494578 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19029.182029353833,
            "unit": "iter/sec",
            "range": "stddev: 0.000025649081526629565",
            "extra": "mean: 52.550866267264176 usec\nrounds: 7343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.72614726221894,
            "unit": "iter/sec",
            "range": "stddev: 0.00022806729872919067",
            "extra": "mean: 14.139042471696857 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5884.656337327262,
            "unit": "iter/sec",
            "range": "stddev: 0.00004694538799537465",
            "extra": "mean: 169.93345790761802 usec\nrounds: 2055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 249.48368881432313,
            "unit": "iter/sec",
            "range": "stddev: 0.00021782539998632826",
            "extra": "mean: 4.0082780752221625 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.387260591173806,
            "unit": "iter/sec",
            "range": "stddev: 0.022720940845623764",
            "extra": "mean: 30.876337848484802 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8686692753753673,
            "unit": "iter/sec",
            "range": "stddev: 0.006426967674547175",
            "extra": "mean: 1.1511861053999894 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 159.5577043541505,
            "unit": "iter/sec",
            "range": "stddev: 0.0006999850135538796",
            "extra": "mean: 6.267325066174327 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 141.56392291245294,
            "unit": "iter/sec",
            "range": "stddev: 0.0007573200758359364",
            "extra": "mean: 7.063946656934816 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.82465069022597,
            "unit": "iter/sec",
            "range": "stddev: 0.00048698876147579956",
            "extra": "mean: 9.91820941757987 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.43913091381271,
            "unit": "iter/sec",
            "range": "stddev: 0.00034430521249530417",
            "extra": "mean: 39.30951899999968 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4764653.504753873,
            "unit": "iter/sec",
            "range": "stddev: 6.352504450111448e-9",
            "extra": "mean: 209.87885037214372 nsec\nrounds: 48781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 248.19548364654173,
            "unit": "iter/sec",
            "range": "stddev: 0.00010128772265486693",
            "extra": "mean: 4.029082178723737 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5162.048948620327,
            "unit": "iter/sec",
            "range": "stddev: 0.00005045511259913975",
            "extra": "mean: 193.72152607488783 usec\nrounds: 2186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4367049.285774829,
            "unit": "iter/sec",
            "range": "stddev: 1.4977171372457983e-8",
            "extra": "mean: 228.9875690799626 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2596261840206924,
            "unit": "iter/sec",
            "range": "stddev: 0.00376450002247655",
            "extra": "mean: 442.551076400008 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5746724698450386,
            "unit": "iter/sec",
            "range": "stddev: 0.05488704052997611",
            "extra": "mean: 1.7401216388000136 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15277807822562914,
            "unit": "iter/sec",
            "range": "stddev: 0.058605176616843266",
            "extra": "mean: 6.545441673400012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 252.15146439749597,
            "unit": "iter/sec",
            "range": "stddev: 0.00021772747042788767",
            "extra": "mean: 3.965870285106029 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.06080864652847,
            "unit": "iter/sec",
            "range": "stddev: 0.0002189657215430322",
            "extra": "mean: 10.86238557646766 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1531151.000104107,
            "unit": "iter/sec",
            "range": "stddev: 1.4273171146102986e-7",
            "extra": "mean: 653.1034495827043 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 156.65099325444686,
            "unit": "iter/sec",
            "range": "stddev: 0.0007459780557224245",
            "extra": "mean: 6.383617359997895 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 332.82810485793044,
            "unit": "iter/sec",
            "range": "stddev: 0.000034087470641204185",
            "extra": "mean: 3.0045539586473793 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12069031.474225739,
            "unit": "iter/sec",
            "range": "stddev: 3.786695957364373e-9",
            "extra": "mean: 82.85669004465895 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 415.9557480648848,
            "unit": "iter/sec",
            "range": "stddev: 0.0000908530867159045",
            "extra": "mean: 2.4041018898097075 msec\nrounds: 363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.2051578162872,
            "unit": "iter/sec",
            "range": "stddev: 0.0007589762151647621",
            "extra": "mean: 10.96429219512213 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4544.750431501056,
            "unit": "iter/sec",
            "range": "stddev: 0.000022045504713842744",
            "extra": "mean: 220.03408439519453 usec\nrounds: 1884"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.99571463014806,
            "unit": "iter/sec",
            "range": "stddev: 0.0008595206787318418",
            "extra": "mean: 23.81195340541046 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1520282.9916392036,
            "unit": "iter/sec",
            "range": "stddev: 1.137305546396643e-7",
            "extra": "mean: 657.7722736487219 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 255.05361641478427,
            "unit": "iter/sec",
            "range": "stddev: 0.0002536950750979694",
            "extra": "mean: 3.920744250000114 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1446.2787827552952,
            "unit": "iter/sec",
            "range": "stddev: 0.000031584974158832154",
            "extra": "mean: 691.4296274850325 usec\nrounds: 1157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1517889.5478864787,
            "unit": "iter/sec",
            "range": "stddev: 1.266595672602511e-7",
            "extra": "mean: 658.8094643595167 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.886356177118808,
            "unit": "iter/sec",
            "range": "stddev: 0.00025755123597987704",
            "extra": "mean: 204.65147520000073 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 514.379593028787,
            "unit": "iter/sec",
            "range": "stddev: 0.00003985320494205023",
            "extra": "mean: 1.9440895664459916 msec\nrounds: 459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 146.41839737948678,
            "unit": "iter/sec",
            "range": "stddev: 0.0007244497740730495",
            "extra": "mean: 6.829742832167482 msec\nrounds: 143"
          }
        ]
      }
    ]
  }
}