window.BENCHMARK_DATA = {
  "lastUpdate": 1683384618088,
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
          "id": "bf5687e0d350cf307d9a7d226b9eb7981c601d3c",
          "message": "fix(impala): more aggressively clean up cursors internally\n\nBREAKING CHANGE: Cursors are no longer returned from DDL operations to prevent resource leakage. Use `raw_sql` if you need specialized operations that return a cursor. Additionally, table-based DDL operations now return the table they're operating on.",
          "timestamp": "2023-05-06T07:43:56-07:00",
          "tree_id": "7f86d2d269db93b726a0f15da8f4720369d8e605",
          "url": "https://github.com/ibis-project/ibis/commit/bf5687e0d350cf307d9a7d226b9eb7981c601d3c"
        },
        "date": 1683384521304,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 70.47925472541198,
            "unit": "iter/sec",
            "range": "stddev: 0.011441942036219096",
            "extra": "mean: 14.188572281248035 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4602365.161113894,
            "unit": "iter/sec",
            "range": "stddev: 5.598307935654105e-7",
            "extra": "mean: 217.279586689258 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 79.45659037503016,
            "unit": "iter/sec",
            "range": "stddev: 0.0013319012627236964",
            "extra": "mean: 12.585488444445733 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.20679554021984,
            "unit": "iter/sec",
            "range": "stddev: 0.0010004971388401695",
            "extra": "mean: 12.625179357145148 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4868.477746914059,
            "unit": "iter/sec",
            "range": "stddev: 0.0003123841540971567",
            "extra": "mean: 205.40301342321254 usec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8540.767905424691,
            "unit": "iter/sec",
            "range": "stddev: 0.00014206696386213975",
            "extra": "mean: 117.08549056400975 usec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1411.6602057415698,
            "unit": "iter/sec",
            "range": "stddev: 0.00008057016607091949",
            "extra": "mean: 708.3857687088959 usec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.52253267576124,
            "unit": "iter/sec",
            "range": "stddev: 0.0018982055196340782",
            "extra": "mean: 13.068046299998551 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5347426.107296212,
            "unit": "iter/sec",
            "range": "stddev: 4.743989724461876e-7",
            "extra": "mean: 187.00585663745113 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.63173035005352,
            "unit": "iter/sec",
            "range": "stddev: 0.0005673007943458589",
            "extra": "mean: 11.033663333334001 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 123.12760265073022,
            "unit": "iter/sec",
            "range": "stddev: 0.011095682081706176",
            "extra": "mean: 8.121655733334213 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9139.364412301982,
            "unit": "iter/sec",
            "range": "stddev: 0.000028542225467396644",
            "extra": "mean: 109.41679912160592 usec\nrounds: 4326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 79.88062552963946,
            "unit": "iter/sec",
            "range": "stddev: 0.0010879755459869652",
            "extra": "mean: 12.518680135134307 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 182.47659533851652,
            "unit": "iter/sec",
            "range": "stddev: 0.007904449402796693",
            "extra": "mean: 5.4801548557220565 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 185.18351194466717,
            "unit": "iter/sec",
            "range": "stddev: 0.0043453633486742515",
            "extra": "mean: 5.400048792134367 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1402473.1023134242,
            "unit": "iter/sec",
            "range": "stddev: 0.000001060410266276412",
            "extra": "mean: 713.0261524092463 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 885564.2389222964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012061622672531148",
            "extra": "mean: 1.1292235571944145 usec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.79264120172193,
            "unit": "iter/sec",
            "range": "stddev: 0.0011181281766934753",
            "extra": "mean: 20.923723294120244 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1579.6200251623588,
            "unit": "iter/sec",
            "range": "stddev: 0.00017731832389257645",
            "extra": "mean: 633.0636381348842 usec\nrounds: 1180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 79.00754697259664,
            "unit": "iter/sec",
            "range": "stddev: 0.001609532029241531",
            "extra": "mean: 12.657018706666653 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4501581.137044004,
            "unit": "iter/sec",
            "range": "stddev: 3.3735358940743734e-7",
            "extra": "mean: 222.14416880573086 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 319.71069217686846,
            "unit": "iter/sec",
            "range": "stddev: 0.00031345771458579267",
            "extra": "mean: 3.127827828312936 msec\nrounds: 332"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 906.0396528980788,
            "unit": "iter/sec",
            "range": "stddev: 0.0004146022517911275",
            "extra": "mean: 1.1037044535538567 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 201.46214035292638,
            "unit": "iter/sec",
            "range": "stddev: 0.0006551296294519469",
            "extra": "mean: 4.963711783505205 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 396.4588953046676,
            "unit": "iter/sec",
            "range": "stddev: 0.0003736286553395797",
            "extra": "mean: 2.5223295828222696 msec\nrounds: 326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 76.62470262325027,
            "unit": "iter/sec",
            "range": "stddev: 0.0009960502473931882",
            "extra": "mean: 13.050621611111735 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 80.26049015999754,
            "unit": "iter/sec",
            "range": "stddev: 0.0013662427407705997",
            "extra": "mean: 12.459430511905941 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 80.0935591285528,
            "unit": "iter/sec",
            "range": "stddev: 0.0015199660324068578",
            "extra": "mean: 12.485398462502673 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 52.35062331219938,
            "unit": "iter/sec",
            "range": "stddev: 0.031875945963881255",
            "extra": "mean: 19.1019693125023 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 75.49868808697215,
            "unit": "iter/sec",
            "range": "stddev: 0.0013713681930041595",
            "extra": "mean: 13.245263266668038 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1587523.9154971738,
            "unit": "iter/sec",
            "range": "stddev: 8.916223429951253e-7",
            "extra": "mean: 629.9117702972206 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 81.08056860257253,
            "unit": "iter/sec",
            "range": "stddev: 0.0011581010792780489",
            "extra": "mean: 12.333411287501406 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 207.00344830481302,
            "unit": "iter/sec",
            "range": "stddev: 0.0006148733079007413",
            "extra": "mean: 4.830837400000689 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 139.6806108280077,
            "unit": "iter/sec",
            "range": "stddev: 0.00022016113375704932",
            "extra": "mean: 7.159189769232364 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.62524455556533,
            "unit": "iter/sec",
            "range": "stddev: 0.0009565031586892361",
            "extra": "mean: 12.10283861038985 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.69151687420851,
            "unit": "iter/sec",
            "range": "stddev: 0.001958631388544954",
            "extra": "mean: 28.825490785715754 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 66.48660728223066,
            "unit": "iter/sec",
            "range": "stddev: 0.022617964630559567",
            "extra": "mean: 15.040623079999781 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 195.63811085427224,
            "unit": "iter/sec",
            "range": "stddev: 0.0005499432851905531",
            "extra": "mean: 5.111478513227334 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3519636.421854458,
            "unit": "iter/sec",
            "range": "stddev: 7.939016045996495e-7",
            "extra": "mean: 284.1202556578882 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 206.9838370461305,
            "unit": "iter/sec",
            "range": "stddev: 0.0005678821431702751",
            "extra": "mean: 4.831295111111164 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 86.94892202967583,
            "unit": "iter/sec",
            "range": "stddev: 0.0008053856921340496",
            "extra": "mean: 11.501005149422072 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3284.7807341000007,
            "unit": "iter/sec",
            "range": "stddev: 0.00007808065584060076",
            "extra": "mean: 304.4343233077293 usec\nrounds: 798"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.968663276273085,
            "unit": "iter/sec",
            "range": "stddev: 0.010758300899832256",
            "extra": "mean: 507.95888360000276 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1587.4925532381835,
            "unit": "iter/sec",
            "range": "stddev: 0.0001771046613060608",
            "extra": "mean: 629.9242147373793 usec\nrounds: 950"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1581942.488021517,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013395333807807245",
            "extra": "mean: 632.1342321683684 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 595.0288989182764,
            "unit": "iter/sec",
            "range": "stddev: 0.00032077580747918256",
            "extra": "mean: 1.6805906432745277 msec\nrounds: 513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 36.01022446945644,
            "unit": "iter/sec",
            "range": "stddev: 0.000736269763069873",
            "extra": "mean: 27.769890766667988 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 530.4851626777755,
            "unit": "iter/sec",
            "range": "stddev: 0.00026216462935073006",
            "extra": "mean: 1.8850668602156826 msec\nrounds: 465"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1688.2833308814088,
            "unit": "iter/sec",
            "range": "stddev: 0.00013471052484315463",
            "extra": "mean: 592.3176410667551 usec\nrounds: 1237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.00467096921272,
            "unit": "iter/sec",
            "range": "stddev: 0.03681970335173928",
            "extra": "mean: 41.658558923076 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.086046081277605,
            "unit": "iter/sec",
            "range": "stddev: 0.001849633820943157",
            "extra": "mean: 47.42472799999734 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 77.37038555785072,
            "unit": "iter/sec",
            "range": "stddev: 0.0011391456157339626",
            "extra": "mean: 12.924841886076534 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.0894877079254066,
            "unit": "iter/sec",
            "range": "stddev: 0.014133555306211862",
            "extra": "mean: 917.8625814000156 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 174.44415351146804,
            "unit": "iter/sec",
            "range": "stddev: 0.0008354670178852916",
            "extra": "mean: 5.732493636906321 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 99.77489261887649,
            "unit": "iter/sec",
            "range": "stddev: 0.0005644043366334805",
            "extra": "mean: 10.022561525772158 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 141.91174197591067,
            "unit": "iter/sec",
            "range": "stddev: 0.0045504157798306214",
            "extra": "mean: 7.046633253009809 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 127.31569683484517,
            "unit": "iter/sec",
            "range": "stddev: 0.0008348837846431776",
            "extra": "mean: 7.854491039680733 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 165.6417016981488,
            "unit": "iter/sec",
            "range": "stddev: 0.0006402093676399011",
            "extra": "mean: 6.037127062497305 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5885066069489286,
            "unit": "iter/sec",
            "range": "stddev: 0.012806491649910323",
            "extra": "mean: 1.6992162674000042 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.485724534786605,
            "unit": "iter/sec",
            "range": "stddev: 0.0011289058281828271",
            "extra": "mean: 17.70358808771502 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.781260684521925,
            "unit": "iter/sec",
            "range": "stddev: 0.03918554686525694",
            "extra": "mean: 35.99548671875574 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1562004.018790036,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030306979108667386",
            "extra": "mean: 640.2032184108098 nsec\nrounds: 169463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1609.4877238223296,
            "unit": "iter/sec",
            "range": "stddev: 0.00028510713422857074",
            "extra": "mean: 621.3157051146227 usec\nrounds: 1075"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.8838436130408365,
            "unit": "iter/sec",
            "range": "stddev: 0.001798257359133887",
            "extra": "mean: 145.26768128572647 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1699.3896629731246,
            "unit": "iter/sec",
            "range": "stddev: 0.000163224720375317",
            "extra": "mean: 588.4465592490866 usec\nrounds: 1173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 266.7602824160077,
            "unit": "iter/sec",
            "range": "stddev: 0.0002393380579467648",
            "extra": "mean: 3.7486839905219416 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1635.746422228358,
            "unit": "iter/sec",
            "range": "stddev: 0.00013240293876326653",
            "extra": "mean: 611.3417008962257 usec\nrounds: 1227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 79.77691718661114,
            "unit": "iter/sec",
            "range": "stddev: 0.0010883492347020358",
            "extra": "mean: 12.534954160497803 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.85744749311555,
            "unit": "iter/sec",
            "range": "stddev: 0.0009292138611783491",
            "extra": "mean: 22.8011445526321 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 197.9447100643252,
            "unit": "iter/sec",
            "range": "stddev: 0.0004970255994187187",
            "extra": "mean: 5.051915758067163 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8094.091130752397,
            "unit": "iter/sec",
            "range": "stddev: 0.000034953096634953703",
            "extra": "mean: 123.54691636725417 usec\nrounds: 1949"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8910110.905451922,
            "unit": "iter/sec",
            "range": "stddev: 2.9214114365539834e-7",
            "extra": "mean: 112.23204858069364 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 158.37124698653216,
            "unit": "iter/sec",
            "range": "stddev: 0.016314609668817506",
            "extra": "mean: 6.314277490566451 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 146.69496491834215,
            "unit": "iter/sec",
            "range": "stddev: 0.00040026879101983385",
            "extra": "mean: 6.816866554054194 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.64098246455015,
            "unit": "iter/sec",
            "range": "stddev: 0.0007867662590078178",
            "extra": "mean: 12.248750196437388 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5189236304806882,
            "unit": "iter/sec",
            "range": "stddev: 0.03877220575966649",
            "extra": "mean: 1.9270658364000155 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.937382162554488,
            "unit": "iter/sec",
            "range": "stddev: 0.002126748702848253",
            "extra": "mean: 66.94613481248624 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.586873303066485,
            "unit": "iter/sec",
            "range": "stddev: 0.01821430950237857",
            "extra": "mean: 1.7039452889999893 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1669.4206453895038,
            "unit": "iter/sec",
            "range": "stddev: 0.00014650707895796122",
            "extra": "mean: 599.0102031873957 usec\nrounds: 1004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4844204.880995372,
            "unit": "iter/sec",
            "range": "stddev: 3.677085225490204e-7",
            "extra": "mean: 206.43222666416426 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0760757604002291,
            "unit": "iter/sec",
            "range": "stddev: 0.012226787130396446",
            "extra": "mean: 929.3025982000245 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 63.3024499151594,
            "unit": "iter/sec",
            "range": "stddev: 0.0019157180017298821",
            "extra": "mean: 15.797176907690652 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 139.82314592001987,
            "unit": "iter/sec",
            "range": "stddev: 0.0004722125754235975",
            "extra": "mean: 7.151891723077159 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 20.34486569979972,
            "unit": "iter/sec",
            "range": "stddev: 0.03461422071237055",
            "extra": "mean: 49.15245029166471 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1613.633805561391,
            "unit": "iter/sec",
            "range": "stddev: 0.00020149039324023402",
            "extra": "mean: 619.71929229141 usec\nrounds: 999"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 88.57170347460927,
            "unit": "iter/sec",
            "range": "stddev: 0.0009990108158089202",
            "extra": "mean: 11.290287538465021 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1548.530785013702,
            "unit": "iter/sec",
            "range": "stddev: 0.0003160066981644258",
            "extra": "mean: 645.7734064299868 usec\nrounds: 1213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 79.86257104118533,
            "unit": "iter/sec",
            "range": "stddev: 0.0006559898182539501",
            "extra": "mean: 12.521510226415042 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 77.86481355231378,
            "unit": "iter/sec",
            "range": "stddev: 0.0013666464921652454",
            "extra": "mean: 12.842771392859577 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 124760.87045898775,
            "unit": "iter/sec",
            "range": "stddev: 0.00001336299030100249",
            "extra": "mean: 8.015333624405311 usec\nrounds: 36631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11084908112651864,
            "unit": "iter/sec",
            "range": "stddev: 0.09908956000522662",
            "extra": "mean: 9.02127459999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 63.852314933252096,
            "unit": "iter/sec",
            "range": "stddev: 0.021511629266641775",
            "extra": "mean: 15.661139318838293 msec\nrounds: 69"
          }
        ]
      }
    ]
  }
}