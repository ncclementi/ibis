window.BENCHMARK_DATA = {
  "lastUpdate": 1678127597725,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "omrif@diagnosticrobotics.com",
            "name": "Omri Fima",
            "username": "thegreymatter"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "ee218f526220ee4f4d8c0024110cb7e66a17ba23",
          "message": "feat: add `persist` API to table relation",
          "timestamp": "2023-03-06T13:23:39-05:00",
          "tree_id": "00d71e40ecb49ce7f49d6836c1d2a9cf413844d5",
          "url": "https://github.com/ibis-project/ibis/commit/ee218f526220ee4f4d8c0024110cb7e66a17ba23"
        },
        "date": 1678127512297,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.20506890959695,
            "unit": "iter/sec",
            "range": "stddev: 0.0050877199295593836",
            "extra": "mean: 3.7424439741385602 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13194.67706932316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045320777777959945",
            "extra": "mean: 75.78813750015456 usec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.13166221723259,
            "unit": "iter/sec",
            "range": "stddev: 0.0003391681568234557",
            "extra": "mean: 21.217159611111132 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.78853036928183,
            "unit": "iter/sec",
            "range": "stddev: 0.00004231912831261636",
            "extra": "mean: 5.160264119318147 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.87274843036224,
            "unit": "iter/sec",
            "range": "stddev: 0.00017558750146363385",
            "extra": "mean: 14.109795685186029 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5360.777986460811,
            "unit": "iter/sec",
            "range": "stddev: 0.000041363770259189856",
            "extra": "mean: 186.54008849566267 usec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.54034847436675,
            "unit": "iter/sec",
            "range": "stddev: 0.0008771981587095059",
            "extra": "mean: 15.989677454545483 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7227381.159009521,
            "unit": "iter/sec",
            "range": "stddev: 6.05555142657715e-9",
            "extra": "mean: 138.36270400010562 nsec\nrounds: 62500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 315.86425650751727,
            "unit": "iter/sec",
            "range": "stddev: 0.00020147223034864493",
            "extra": "mean: 3.165916938677742 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.332053018322197,
            "unit": "iter/sec",
            "range": "stddev: 0.00041621311497862235",
            "extra": "mean: 65.2228373333287 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1827743.0450498278,
            "unit": "iter/sec",
            "range": "stddev: 1.1355082735104769e-7",
            "extra": "mean: 547.12285882217 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.59206135189021,
            "unit": "iter/sec",
            "range": "stddev: 0.0006171271687071526",
            "extra": "mean: 8.292419822578358 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5792.062111977247,
            "unit": "iter/sec",
            "range": "stddev: 0.00005357543069913407",
            "extra": "mean: 172.6500822448239 usec\nrounds: 2602"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11626.906118006647,
            "unit": "iter/sec",
            "range": "stddev: 0.00001717672758440794",
            "extra": "mean: 86.00740298842656 usec\nrounds: 4283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5686.346081874538,
            "unit": "iter/sec",
            "range": "stddev: 0.00004179278503251695",
            "extra": "mean: 175.8598554505047 usec\nrounds: 422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.837421067202,
            "unit": "iter/sec",
            "range": "stddev: 0.0005334787081471259",
            "extra": "mean: 9.819573095238782 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1198.6627252745682,
            "unit": "iter/sec",
            "range": "stddev: 0.000014466615112741126",
            "extra": "mean: 834.2630323896474 usec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 106.61574888040377,
            "unit": "iter/sec",
            "range": "stddev: 0.009832312662789281",
            "extra": "mean: 9.37947733333234 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 303.2955838170241,
            "unit": "iter/sec",
            "range": "stddev: 0.00021451131412470159",
            "extra": "mean: 3.29711361904726 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.96488723566344,
            "unit": "iter/sec",
            "range": "stddev: 0.00007162776395509613",
            "extra": "mean: 6.136291178810197 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 286.943715235762,
            "unit": "iter/sec",
            "range": "stddev: 0.007743873091821338",
            "extra": "mean: 3.485004016130371 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6453078.79526109,
            "unit": "iter/sec",
            "range": "stddev: 1.0113539052525976e-8",
            "extra": "mean: 154.96478994393553 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.74686251250279,
            "unit": "iter/sec",
            "range": "stddev: 0.0005788267820873415",
            "extra": "mean: 18.605737214286258 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.82960682252475,
            "unit": "iter/sec",
            "range": "stddev: 0.0006322360599607575",
            "extra": "mean: 9.449151612903472 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2558900.1475878526,
            "unit": "iter/sec",
            "range": "stddev: 1.6930026825997326e-8",
            "extra": "mean: 390.79289629284824 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 107.71347852794628,
            "unit": "iter/sec",
            "range": "stddev: 0.010073388445487533",
            "extra": "mean: 9.283889199999699 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6812740779095136,
            "unit": "iter/sec",
            "range": "stddev: 0.001741026398759802",
            "extra": "mean: 1.4678380293999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 171.09485119292546,
            "unit": "iter/sec",
            "range": "stddev: 0.0040203920478831335",
            "extra": "mean: 5.844711240739831 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18042518475951755,
            "unit": "iter/sec",
            "range": "stddev: 0.010868286607730156",
            "extra": "mean: 5.5424634943999935 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5468.826102588088,
            "unit": "iter/sec",
            "range": "stddev: 0.00004392985436476761",
            "extra": "mean: 182.85459827050562 usec\nrounds: 2198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.662081588333855,
            "unit": "iter/sec",
            "range": "stddev: 0.0006106356425095566",
            "extra": "mean: 38.96800018181714 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.07913432685044,
            "unit": "iter/sec",
            "range": "stddev: 0.00005777895301252867",
            "extra": "mean: 6.286179543480287 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2547369.2463711603,
            "unit": "iter/sec",
            "range": "stddev: 1.9815443580571114e-8",
            "extra": "mean: 392.5618562853808 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.408289641485823,
            "unit": "iter/sec",
            "range": "stddev: 0.00026850140408761714",
            "extra": "mean: 96.07726479998746 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 296.288497054185,
            "unit": "iter/sec",
            "range": "stddev: 0.00004283390267789733",
            "extra": "mean: 3.3750888405806756 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 317.0338809970311,
            "unit": "iter/sec",
            "range": "stddev: 0.0002218465680429375",
            "extra": "mean: 3.154237007272307 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 738.9744459906901,
            "unit": "iter/sec",
            "range": "stddev: 0.00001179781820889416",
            "extra": "mean: 1.3532267663997117 msec\nrounds: 625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9243873530194204,
            "unit": "iter/sec",
            "range": "stddev: 0.0016410397340691015",
            "extra": "mean: 1.0817975784000056 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 757083.5077498372,
            "unit": "iter/sec",
            "range": "stddev: 1.8774410044855086e-7",
            "extra": "mean: 1.3208582537640345 usec\nrounds: 22625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5853.543532306336,
            "unit": "iter/sec",
            "range": "stddev: 0.00004375094555248638",
            "extra": "mean: 170.83668968734793 usec\nrounds: 2172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.3545311131658,
            "unit": "iter/sec",
            "range": "stddev: 0.00007172563975608691",
            "extra": "mean: 3.0641523394484222 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.59261167998151,
            "unit": "iter/sec",
            "range": "stddev: 0.0010786443602458725",
            "extra": "mean: 25.257237589749902 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 246.880096177104,
            "unit": "iter/sec",
            "range": "stddev: 0.0042002423186455985",
            "extra": "mean: 4.0505492969454755 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5822.14969397914,
            "unit": "iter/sec",
            "range": "stddev: 0.00004474745297171608",
            "extra": "mean: 171.75786480277728 usec\nrounds: 2182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.09941302400853,
            "unit": "iter/sec",
            "range": "stddev: 0.000693475233457324",
            "extra": "mean: 9.606202100000019 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 308.24439517958155,
            "unit": "iter/sec",
            "range": "stddev: 0.00024618579979416997",
            "extra": "mean: 3.244179020408158 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.484750143112219,
            "unit": "iter/sec",
            "range": "stddev: 0.00039856148797626",
            "extra": "mean: 182.32371099999986 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.58696442662993,
            "unit": "iter/sec",
            "range": "stddev: 0.026131282096517834",
            "extra": "mean: 31.65862937930601 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 482159.1919570838,
            "unit": "iter/sec",
            "range": "stddev: 2.8358383162062996e-7",
            "extra": "mean: 2.0740038076242016 usec\nrounds: 2101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.5367191819054,
            "unit": "iter/sec",
            "range": "stddev: 0.00007025851160943922",
            "extra": "mean: 9.046767512199672 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 316.16666527044987,
            "unit": "iter/sec",
            "range": "stddev: 0.0001878302234092199",
            "extra": "mean: 3.1628887857124255 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.14405615768884,
            "unit": "iter/sec",
            "range": "stddev: 0.013424096784091847",
            "extra": "mean: 11.09335482142829 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.03846425266065,
            "unit": "iter/sec",
            "range": "stddev: 0.00010856009464307157",
            "extra": "mean: 7.297221298074965 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.65263448750677,
            "unit": "iter/sec",
            "range": "stddev: 0.0006825521715636281",
            "extra": "mean: 10.136576739130454 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 274.484864071165,
            "unit": "iter/sec",
            "range": "stddev: 0.00034264840061061887",
            "extra": "mean: 3.643188134922924 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.506037590872599,
            "unit": "iter/sec",
            "range": "stddev: 0.001121335762026998",
            "extra": "mean: 399.03631280000127 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.38394753914406,
            "unit": "iter/sec",
            "range": "stddev: 0.0006881680599978926",
            "extra": "mean: 8.447091187505354 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 110.80017194474951,
            "unit": "iter/sec",
            "range": "stddev: 0.0007627360570532921",
            "extra": "mean: 9.025256752296828 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.2800273064497,
            "unit": "iter/sec",
            "range": "stddev: 0.00019610693274874614",
            "extra": "mean: 6.743996599982438 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.78157540060005,
            "unit": "iter/sec",
            "range": "stddev: 0.0006947893848539342",
            "extra": "mean: 10.021890273682594 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141709.24539932047,
            "unit": "iter/sec",
            "range": "stddev: 4.371989632624797e-7",
            "extra": "mean: 7.0567025968003305 usec\nrounds: 38315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 112.42955769984133,
            "unit": "iter/sec",
            "range": "stddev: 0.0007711700977773447",
            "extra": "mean: 8.894458187496822 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 72.81339456191728,
            "unit": "iter/sec",
            "range": "stddev: 0.0001831288133075261",
            "extra": "mean: 13.733736849057962 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.75655130179148,
            "unit": "iter/sec",
            "range": "stddev: 0.00005535576994574695",
            "extra": "mean: 10.443149699996468 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.1165329454708,
            "unit": "iter/sec",
            "range": "stddev: 0.000024044870999739315",
            "extra": "mean: 1.8378416009281895 msec\nrounds: 431"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.1739753021642,
            "unit": "iter/sec",
            "range": "stddev: 0.00002004951033455048",
            "extra": "mean: 1.4659017145253261 msec\nrounds: 599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7769856446477674,
            "unit": "iter/sec",
            "range": "stddev: 0.0018781241428558854",
            "extra": "mean: 562.7507476000005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12413530.199344955,
            "unit": "iter/sec",
            "range": "stddev: 3.7494544773654056e-9",
            "extra": "mean: 80.55726162826576 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71419.72092515236,
            "unit": "iter/sec",
            "range": "stddev: 5.300176454437155e-7",
            "extra": "mean: 14.001734913638165 usec\nrounds: 12611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.74406820335093,
            "unit": "iter/sec",
            "range": "stddev: 0.00024890063578219006",
            "extra": "mean: 3.2814420503591744 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5307.212445870104,
            "unit": "iter/sec",
            "range": "stddev: 0.000023249510500978472",
            "extra": "mean: 188.42283217401007 usec\nrounds: 2443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.53119983363985,
            "unit": "iter/sec",
            "range": "stddev: 0.0003485765283224074",
            "extra": "mean: 10.691619500002773 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8059.1498439247625,
            "unit": "iter/sec",
            "range": "stddev: 0.000011914611698504495",
            "extra": "mean: 124.08256694145363 usec\nrounds: 3630"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8474788195474773,
            "unit": "iter/sec",
            "range": "stddev: 0.0026975952844542177",
            "extra": "mean: 1.1799704923999912 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11877.542246116713,
            "unit": "iter/sec",
            "range": "stddev: 0.000002337481045927933",
            "extra": "mean: 84.19250205798626 usec\nrounds: 4860"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1734.93763062264,
            "unit": "iter/sec",
            "range": "stddev: 0.000009153496376806883",
            "extra": "mean: 576.3895960001264 usec\nrounds: 1250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.82102141954266,
            "unit": "iter/sec",
            "range": "stddev: 0.00066723376241451",
            "extra": "mean: 8.276705396551558 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.90330535675716,
            "unit": "iter/sec",
            "range": "stddev: 0.0007302661203494124",
            "extra": "mean: 11.00070009638727 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.96287732264996,
            "unit": "iter/sec",
            "range": "stddev: 0.0003397529177718157",
            "extra": "mean: 10.003713646339953 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5249.4844054225905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000680848828120503",
            "extra": "mean: 190.49489869272193 usec\nrounds: 2448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5853859.869696467,
            "unit": "iter/sec",
            "range": "stddev: 2.0375724622923913e-8",
            "extra": "mean: 170.8274578247009 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1682632.849692951,
            "unit": "iter/sec",
            "range": "stddev: 1.1247429303061615e-7",
            "extra": "mean: 594.3067141370033 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9246618127137852,
            "unit": "iter/sec",
            "range": "stddev: 0.001991625397872187",
            "extra": "mean: 1.0814764773999967 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 103.54182679518644,
            "unit": "iter/sec",
            "range": "stddev: 0.013762206999900316",
            "extra": "mean: 9.657932749999434 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.42344460149181,
            "unit": "iter/sec",
            "range": "stddev: 0.00016225144165082995",
            "extra": "mean: 8.589335278842851 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.04499120807699,
            "unit": "iter/sec",
            "range": "stddev: 0.0006263348576526495",
            "extra": "mean: 28.53474820588698 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.60903443409914,
            "unit": "iter/sec",
            "range": "stddev: 0.0006932335197455033",
            "extra": "mean: 9.651667979166945 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5589.181670012794,
            "unit": "iter/sec",
            "range": "stddev: 0.00005136400868175321",
            "extra": "mean: 178.91706855141658 usec\nrounds: 3326"
          }
        ]
      }
    ]
  }
}