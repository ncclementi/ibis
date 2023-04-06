window.BENCHMARK_DATA = {
  "lastUpdate": 1680802605129,
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
          "id": "4a957fd8d7d393683251fd12ed40367dd4568c8e",
          "message": "ci(pyspark): disable parallel test runs\n\nThese seem to be a source of flakiness",
          "timestamp": "2023-04-06T12:27:32-05:00",
          "tree_id": "f4fb76d5a978f62dad43db1d9005cb6dd457ee69",
          "url": "https://github.com/ibis-project/ibis/commit/4a957fd8d7d393683251fd12ed40367dd4568c8e"
        },
        "date": 1680802506601,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9878.964977927195,
            "unit": "iter/sec",
            "range": "stddev: 0.00005452745148172526",
            "extra": "mean: 101.22517917963306 usec\nrounds: 2584"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5457242144996487,
            "unit": "iter/sec",
            "range": "stddev: 0.021511273363809306",
            "extra": "mean: 1.8324273936000026 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4957.01032793544,
            "unit": "iter/sec",
            "range": "stddev: 0.0001575772797315245",
            "extra": "mean: 201.7344999998201 usec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.97671923972932,
            "unit": "iter/sec",
            "range": "stddev: 0.0010004900742168652",
            "extra": "mean: 32.282308280001644 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.9557645781763685,
            "unit": "iter/sec",
            "range": "stddev: 0.017986534950414534",
            "extra": "mean: 1.0462827592000052 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09782693440360768,
            "unit": "iter/sec",
            "range": "stddev: 0.16596899952448535",
            "extra": "mean: 10.222133670000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1311.7825100743103,
            "unit": "iter/sec",
            "range": "stddev: 0.0005882210893542018",
            "extra": "mean: 762.3214918022895 usec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 120.86896636798288,
            "unit": "iter/sec",
            "range": "stddev: 0.0002949868625509158",
            "extra": "mean: 8.273422285713293 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 75.18031396863229,
            "unit": "iter/sec",
            "range": "stddev: 0.0014457482679642727",
            "extra": "mean: 13.301354399999354 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 168.96301536949332,
            "unit": "iter/sec",
            "range": "stddev: 0.000986952866109811",
            "extra": "mean: 5.918454981483198 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 194.6927621903209,
            "unit": "iter/sec",
            "range": "stddev: 0.0008831348822193841",
            "extra": "mean: 5.136297768596323 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 70.39306417639129,
            "unit": "iter/sec",
            "range": "stddev: 0.0015915734705312318",
            "extra": "mean: 14.205945027399219 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5074050.841595676,
            "unit": "iter/sec",
            "range": "stddev: 2.5204497425286667e-7",
            "extra": "mean: 197.08119433930906 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 69.0139016510165,
            "unit": "iter/sec",
            "range": "stddev: 0.0015605470875147314",
            "extra": "mean: 14.489834309857065 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1528.499398729315,
            "unit": "iter/sec",
            "range": "stddev: 0.00028313872993617113",
            "extra": "mean: 654.2364366196862 usec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.40162696596997,
            "unit": "iter/sec",
            "range": "stddev: 0.0012700235789860662",
            "extra": "mean: 12.135682714286427 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 53.658976486822496,
            "unit": "iter/sec",
            "range": "stddev: 0.03036157010716038",
            "extra": "mean: 18.636210853659847 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 187.543782550913,
            "unit": "iter/sec",
            "range": "stddev: 0.0009112380600821209",
            "extra": "mean: 5.332088253730978 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8116.560029327124,
            "unit": "iter/sec",
            "range": "stddev: 0.00010373235449408115",
            "extra": "mean: 123.2049040956704 usec\nrounds: 5005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.819153352602235,
            "unit": "iter/sec",
            "range": "stddev: 0.0016267754371251152",
            "extra": "mean: 30.470012107143823 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1616.168916847449,
            "unit": "iter/sec",
            "range": "stddev: 0.00019780200971678832",
            "extra": "mean: 618.7472049336476 usec\nrounds: 1054"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 66.28015352180209,
            "unit": "iter/sec",
            "range": "stddev: 0.001655546133212712",
            "extra": "mean: 15.087472597224169 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 35.36128012376067,
            "unit": "iter/sec",
            "range": "stddev: 0.00215120908658027",
            "extra": "mean: 28.279519194443974 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 121.84302173655095,
            "unit": "iter/sec",
            "range": "stddev: 0.0006398780689455699",
            "extra": "mean: 8.207281678898283 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 186.98432787837754,
            "unit": "iter/sec",
            "range": "stddev: 0.0007781005334341812",
            "extra": "mean: 5.3480417923070105 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 66.94301521755595,
            "unit": "iter/sec",
            "range": "stddev: 0.001587546640769043",
            "extra": "mean: 14.938078255814025 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 69.52036157961417,
            "unit": "iter/sec",
            "range": "stddev: 0.0022856424474588678",
            "extra": "mean: 14.384275013512521 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 68.30871300831521,
            "unit": "iter/sec",
            "range": "stddev: 0.0018425269304556849",
            "extra": "mean: 14.6394208873218 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 474.6376376221102,
            "unit": "iter/sec",
            "range": "stddev: 0.0003960965538589321",
            "extra": "mean: 2.1068704222655112 msec\nrounds: 521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1545.22013423831,
            "unit": "iter/sec",
            "range": "stddev: 0.00019877351004847824",
            "extra": "mean: 647.156982906473 usec\nrounds: 1053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60075.78728468633,
            "unit": "iter/sec",
            "range": "stddev: 0.00000791261193724124",
            "extra": "mean: 16.645641200858734 usec\nrounds: 9961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 411471.25092510507,
            "unit": "iter/sec",
            "range": "stddev: 0.000004911706848810899",
            "extra": "mean: 2.4303034483009784 usec\nrounds: 1740"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 65.376020506429,
            "unit": "iter/sec",
            "range": "stddev: 0.0015068765300210113",
            "extra": "mean: 15.296128339620504 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1419591.691893921,
            "unit": "iter/sec",
            "range": "stddev: 0.000006543955188779427",
            "extra": "mean: 704.4279039600951 nsec\nrounds: 15625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3982833.86305031,
            "unit": "iter/sec",
            "range": "stddev: 7.83126129704836e-7",
            "extra": "mean: 251.07750772045563 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 69.597325274372,
            "unit": "iter/sec",
            "range": "stddev: 0.0014493465169441101",
            "extra": "mean: 14.368368267856876 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 83.15005563147484,
            "unit": "iter/sec",
            "range": "stddev: 0.0007418973930597662",
            "extra": "mean: 12.02645016176597 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 188.1465027411049,
            "unit": "iter/sec",
            "range": "stddev: 0.0006982667717201243",
            "extra": "mean: 5.315007111112925 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 58.79356323178505,
            "unit": "iter/sec",
            "range": "stddev: 0.001447287934271012",
            "extra": "mean: 17.00866463999887 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 221.16353513300913,
            "unit": "iter/sec",
            "range": "stddev: 0.00041370603016835047",
            "extra": "mean: 4.521541037036661 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 605566.4912517352,
            "unit": "iter/sec",
            "range": "stddev: 0.000002118339948171884",
            "extra": "mean: 1.6513463252118716 usec\nrounds: 19961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1467.368671323193,
            "unit": "iter/sec",
            "range": "stddev: 0.0002420696842733114",
            "extra": "mean: 681.4919928052263 usec\nrounds: 695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 136.42827471160209,
            "unit": "iter/sec",
            "range": "stddev: 0.0008580805877706638",
            "extra": "mean: 7.329858873565 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1911643.187682625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011731151378511652",
            "extra": "mean: 523.1101737203196 nsec\nrounds: 59521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 364.10640253240354,
            "unit": "iter/sec",
            "range": "stddev: 0.00035308014959414027",
            "extra": "mean: 2.746449919707208 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 60.30157105129934,
            "unit": "iter/sec",
            "range": "stddev: 0.02382696036585756",
            "extra": "mean: 16.583315866667665 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4714841068383283,
            "unit": "iter/sec",
            "range": "stddev: 0.02122080983717485",
            "extra": "mean: 2.1209622668000123 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3556.6261705527177,
            "unit": "iter/sec",
            "range": "stddev: 0.00024370476295124948",
            "extra": "mean: 281.1653381734508 usec\nrounds: 1928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1410.5689267429914,
            "unit": "iter/sec",
            "range": "stddev: 0.0004170845605144331",
            "extra": "mean: 708.9338075162364 usec\nrounds: 1091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5174762929910667,
            "unit": "iter/sec",
            "range": "stddev: 0.09537438374113337",
            "extra": "mean: 1.9324556767999865 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.04153508948995,
            "unit": "iter/sec",
            "range": "stddev: 0.0021420244477854413",
            "extra": "mean: 31.209490968739928 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1494.2482226815648,
            "unit": "iter/sec",
            "range": "stddev: 0.00029208733030584155",
            "extra": "mean: 669.2328522267932 usec\nrounds: 988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 67.3494627620269,
            "unit": "iter/sec",
            "range": "stddev: 0.0021926107645262845",
            "extra": "mean: 14.84792838709653 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.46450987952712663,
            "unit": "iter/sec",
            "range": "stddev: 0.07722769880507607",
            "extra": "mean: 2.152806741200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 114.5820584982923,
            "unit": "iter/sec",
            "range": "stddev: 0.0010252902633422517",
            "extra": "mean: 8.727369826532692 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 70.51638676699983,
            "unit": "iter/sec",
            "range": "stddev: 0.0017606780375920882",
            "extra": "mean: 14.181100958904757 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 173.14418496499482,
            "unit": "iter/sec",
            "range": "stddev: 0.001018977151813597",
            "extra": "mean: 5.775533265539201 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.8473138971185716,
            "unit": "iter/sec",
            "range": "stddev: 0.009756033061462178",
            "extra": "mean: 259.92160419999664 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 69.30304353783413,
            "unit": "iter/sec",
            "range": "stddev: 0.0025873004278289843",
            "extra": "mean: 14.429380716217418 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1227.3862893922274,
            "unit": "iter/sec",
            "range": "stddev: 0.0002808318396852289",
            "extra": "mean: 814.7394252669844 usec\nrounds: 1037"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 175.04207957215135,
            "unit": "iter/sec",
            "range": "stddev: 0.0007779312365735101",
            "extra": "mean: 5.712912017751742 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 137.82832902737184,
            "unit": "iter/sec",
            "range": "stddev: 0.006732416231938227",
            "extra": "mean: 7.255402478262697 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 40.838704595813994,
            "unit": "iter/sec",
            "range": "stddev: 0.002422948069866487",
            "extra": "mean: 24.486574926828137 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.000607255045853,
            "unit": "iter/sec",
            "range": "stddev: 0.0029605966916940074",
            "extra": "mean: 62.49762800000269 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 96.57709778117271,
            "unit": "iter/sec",
            "range": "stddev: 0.0010691225912913768",
            "extra": "mean: 10.354421731183411 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 24.56197928001634,
            "unit": "iter/sec",
            "range": "stddev: 0.001880454133646691",
            "extra": "mean: 40.71333130769316 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 64.1544200607402,
            "unit": "iter/sec",
            "range": "stddev: 0.0020312046686110476",
            "extra": "mean: 15.587390534482564 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 81.33475796759025,
            "unit": "iter/sec",
            "range": "stddev: 0.0010081309223366598",
            "extra": "mean: 12.294866610391507 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.1489256679845035,
            "unit": "iter/sec",
            "range": "stddev: 0.007069674940623227",
            "extra": "mean: 139.88115787500277 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1256842.2117002762,
            "unit": "iter/sec",
            "range": "stddev: 0.000004136476765307042",
            "extra": "mean: 795.6448237421816 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 53.99854184200163,
            "unit": "iter/sec",
            "range": "stddev: 0.03129003355185182",
            "extra": "mean: 18.51901858620506 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 38.78970164312228,
            "unit": "iter/sec",
            "range": "stddev: 0.0017151858839803647",
            "extra": "mean: 25.780038454544496 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4449898.528020699,
            "unit": "iter/sec",
            "range": "stddev: 7.441471758960048e-7",
            "extra": "mean: 224.7242254413367 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 81.366627169146,
            "unit": "iter/sec",
            "range": "stddev: 0.0014307207842854425",
            "extra": "mean: 12.290051029412673 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1526.1324525023535,
            "unit": "iter/sec",
            "range": "stddev: 0.00018522114856812865",
            "extra": "mean: 655.2511208056221 usec\nrounds: 894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 182.03726592431732,
            "unit": "iter/sec",
            "range": "stddev: 0.0010571553101947216",
            "extra": "mean: 5.493380681820137 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 106.71409646471928,
            "unit": "iter/sec",
            "range": "stddev: 0.006119041524099511",
            "extra": "mean: 9.37083321818322 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 866.5142535696634,
            "unit": "iter/sec",
            "range": "stddev: 0.00013249735666180854",
            "extra": "mean: 1.1540491063827665 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 51.98332643814888,
            "unit": "iter/sec",
            "range": "stddev: 0.0006887962266381883",
            "extra": "mean: 19.23693746666686 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.132217942511783,
            "unit": "iter/sec",
            "range": "stddev: 0.0013179394889115434",
            "extra": "mean: 89.8293588181735 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 538.3640063497437,
            "unit": "iter/sec",
            "range": "stddev: 0.0002147169711876605",
            "extra": "mean: 1.8574793043470263 msec\nrounds: 506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8525466.96767282,
            "unit": "iter/sec",
            "range": "stddev: 1.3794234093422908e-7",
            "extra": "mean: 117.29562776939231 nsec\nrounds: 88488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9240.855911906769,
            "unit": "iter/sec",
            "range": "stddev: 0.00004637894788933832",
            "extra": "mean: 108.21508413647139 usec\nrounds: 4148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 176.1340836699647,
            "unit": "iter/sec",
            "range": "stddev: 0.0008254683039866135",
            "extra": "mean: 5.67749284615335 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 111963.56851123118,
            "unit": "iter/sec",
            "range": "stddev: 0.000014371821394259882",
            "extra": "mean: 8.931476669571218 usec\nrounds: 33004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.747273842458491,
            "unit": "iter/sec",
            "range": "stddev: 0.0159548141562682",
            "extra": "mean: 572.3201342000038 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 66.94895547090513,
            "unit": "iter/sec",
            "range": "stddev: 0.0015967689242255866",
            "extra": "mean: 14.936752828572253 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1485364.6842590678,
            "unit": "iter/sec",
            "range": "stddev: 0.000002953525901709405",
            "extra": "mean: 673.2353411908549 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}