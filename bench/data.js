window.BENCHMARK_DATA = {
  "lastUpdate": 1679828680928,
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
          "id": "45dc9fdca2df3b840b7ccdb3eaba4ad181cac7bf",
          "message": "build: enforce poetry 1.3",
          "timestamp": "2023-03-26T06:59:33-04:00",
          "tree_id": "5427b373164841212e9ef38720b159217210e329",
          "url": "https://github.com/ibis-project/ibis/commit/45dc9fdca2df3b840b7ccdb3eaba4ad181cac7bf"
        },
        "date": 1679828595718,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.40531027358904,
            "unit": "iter/sec",
            "range": "stddev: 0.009286560791973306",
            "extra": "mean: 11.185017947366903 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.941248229882145,
            "unit": "iter/sec",
            "range": "stddev: 0.0003247005534625786",
            "extra": "mean: 38.54864619999603 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.25367844949931,
            "unit": "iter/sec",
            "range": "stddev: 0.00021726016914760867",
            "extra": "mean: 20.72380867391419 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13284.86377366609,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026641937781588982",
            "extra": "mean: 75.2736359993581 usec\nrounds: 5989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 103.90978652088347,
            "unit": "iter/sec",
            "range": "stddev: 0.0001241357786041864",
            "extra": "mean: 9.623732599999357 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.62277497550335,
            "unit": "iter/sec",
            "range": "stddev: 0.00005307671349956527",
            "extra": "mean: 6.225767175000621 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5844013.770098214,
            "unit": "iter/sec",
            "range": "stddev: 1.3645864180186483e-8",
            "extra": "mean: 171.11527100025228 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.746169019806544,
            "unit": "iter/sec",
            "range": "stddev: 0.0018873422904410713",
            "extra": "mean: 572.6822481999989 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.61661503270743,
            "unit": "iter/sec",
            "range": "stddev: 0.00010595615706266488",
            "extra": "mean: 64.03436326666186 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.32350270218349,
            "unit": "iter/sec",
            "range": "stddev: 0.00006048351878084761",
            "extra": "mean: 10.490592263738687 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.42510333803985,
            "unit": "iter/sec",
            "range": "stddev: 0.0005484514318570302",
            "extra": "mean: 9.485406874997834 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 312.697014814953,
            "unit": "iter/sec",
            "range": "stddev: 0.0002070694384859489",
            "extra": "mean: 3.1979838393781193 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9207798584936451,
            "unit": "iter/sec",
            "range": "stddev: 0.002199570975789209",
            "extra": "mean: 1.0860359192000089 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70683.42877688343,
            "unit": "iter/sec",
            "range": "stddev: 4.702791921001437e-7",
            "extra": "mean: 14.147587593077313 usec\nrounds: 13460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.49143401163707,
            "unit": "iter/sec",
            "range": "stddev: 0.00008408694315906583",
            "extra": "mean: 5.195036366862668 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11954.732004585123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019354946547002805",
            "extra": "mean: 83.64888477771477 usec\nrounds: 5459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.97841814936645,
            "unit": "iter/sec",
            "range": "stddev: 0.0006073263436408126",
            "extra": "mean: 8.198171571428876 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5734.448382142888,
            "unit": "iter/sec",
            "range": "stddev: 0.00005240913782237844",
            "extra": "mean: 174.3846893999442 usec\nrounds: 3783"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6358851.876513352,
            "unit": "iter/sec",
            "range": "stddev: 9.810703308993224e-9",
            "extra": "mean: 157.2610935780479 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.98945312725824,
            "unit": "iter/sec",
            "range": "stddev: 0.01231362171682018",
            "extra": "mean: 12.196690694446646 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.34126896375244,
            "unit": "iter/sec",
            "range": "stddev: 0.00016694945266461332",
            "extra": "mean: 6.084898858974752 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 353.9403990092653,
            "unit": "iter/sec",
            "range": "stddev: 0.000030849268607906475",
            "extra": "mean: 2.8253344427456053 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.84370320522987,
            "unit": "iter/sec",
            "range": "stddev: 0.0036258593434069166",
            "extra": "mean: 6.217215719809943 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.66559841725655,
            "unit": "iter/sec",
            "range": "stddev: 0.0006321091306988115",
            "extra": "mean: 8.645612988509871 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.92664855765335,
            "unit": "iter/sec",
            "range": "stddev: 0.00011015647350084538",
            "extra": "mean: 7.198043070800837 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.6104206320518,
            "unit": "iter/sec",
            "range": "stddev: 0.000016812322477592604",
            "extra": "mean: 1.3216841491088995 msec\nrounds: 617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1725589.7831762228,
            "unit": "iter/sec",
            "range": "stddev: 1.4891961337705038e-7",
            "extra": "mean: 579.5120078651258 nsec\nrounds: 149277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 775941.6457962029,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010090027008541921",
            "extra": "mean: 1.2887567066643113 usec\nrounds: 24156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.36102948801017,
            "unit": "iter/sec",
            "range": "stddev: 0.0005972192825714136",
            "extra": "mean: 9.76934293257702 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12773568.676163763,
            "unit": "iter/sec",
            "range": "stddev: 3.880824840329621e-9",
            "extra": "mean: 78.28665781285646 nsec\nrounds: 123473"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.14030946142794,
            "unit": "iter/sec",
            "range": "stddev: 0.0007101660544812494",
            "extra": "mean: 23.18017678788575 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.58469183532277,
            "unit": "iter/sec",
            "range": "stddev: 0.015145966319138384",
            "extra": "mean: 10.918855323530343 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.46578664842195,
            "unit": "iter/sec",
            "range": "stddev: 0.00021321554238154186",
            "extra": "mean: 3.284441286517153 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5636487062532507,
            "unit": "iter/sec",
            "range": "stddev: 0.002262012705220167",
            "extra": "mean: 390.0690439999835 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.7105759995399,
            "unit": "iter/sec",
            "range": "stddev: 0.0006549636386414459",
            "extra": "mean: 8.284278255815892 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1659205.523264267,
            "unit": "iter/sec",
            "range": "stddev: 1.2343153998824344e-7",
            "extra": "mean: 602.6980901272752 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137578.0314318814,
            "unit": "iter/sec",
            "range": "stddev: 3.816455594550778e-7",
            "extra": "mean: 7.268602331289549 usec\nrounds: 37315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 227.21699048904867,
            "unit": "iter/sec",
            "range": "stddev: 0.0042192444975457455",
            "extra": "mean: 4.401079328828614 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.26099759112462,
            "unit": "iter/sec",
            "range": "stddev: 0.0007416984510173335",
            "extra": "mean: 8.315247836209542 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5636.078458119203,
            "unit": "iter/sec",
            "range": "stddev: 0.000035549902489106",
            "extra": "mean: 177.428332027462 usec\nrounds: 2554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 304.25359002526505,
            "unit": "iter/sec",
            "range": "stddev: 0.00022427669744986802",
            "extra": "mean: 3.2867319656506293 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.97690760438753,
            "unit": "iter/sec",
            "range": "stddev: 0.00023303016524331055",
            "extra": "mean: 14.089089448272661 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11672.655025521659,
            "unit": "iter/sec",
            "range": "stddev: 0.000012598466140823114",
            "extra": "mean: 85.67031217949571 usec\nrounds: 4097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 294.0361283395886,
            "unit": "iter/sec",
            "range": "stddev: 0.00027509549362526154",
            "extra": "mean: 3.4009426176537008 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9212157779720109,
            "unit": "iter/sec",
            "range": "stddev: 0.0029663104365474373",
            "extra": "mean: 1.0855220067999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1186.8364583414864,
            "unit": "iter/sec",
            "range": "stddev: 0.00001621118243555724",
            "extra": "mean: 842.5760710093317 usec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6681470065820697,
            "unit": "iter/sec",
            "range": "stddev: 0.0475717080459655",
            "extra": "mean: 1.496676614799992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.00249666582,
            "unit": "iter/sec",
            "range": "stddev: 0.00004404600626628294",
            "extra": "mean: 3.4129402014636634 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7960.844156520254,
            "unit": "iter/sec",
            "range": "stddev: 0.000012608825551313",
            "extra": "mean: 125.61481927528494 usec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.100611668907774,
            "unit": "iter/sec",
            "range": "stddev: 0.020470236897355172",
            "extra": "mean: 26.24629779411273 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.98666940508523,
            "unit": "iter/sec",
            "range": "stddev: 0.021148898044278386",
            "extra": "mean: 25.649793000003353 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5794.730173143572,
            "unit": "iter/sec",
            "range": "stddev: 0.00006054054426329397",
            "extra": "mean: 172.57058915954875 usec\nrounds: 1974"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.7391691666511,
            "unit": "iter/sec",
            "range": "stddev: 0.00002373724935659832",
            "extra": "mean: 1.8459067701127916 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5303.435835722265,
            "unit": "iter/sec",
            "range": "stddev: 0.00004664731857338246",
            "extra": "mean: 188.5570092626211 usec\nrounds: 2483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.23984791125461,
            "unit": "iter/sec",
            "range": "stddev: 0.00007041418175714321",
            "extra": "mean: 10.390706362318104 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.875253030926096,
            "unit": "iter/sec",
            "range": "stddev: 0.0005390307312655678",
            "extra": "mean: 15.904508559323581 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.5513766378373,
            "unit": "iter/sec",
            "range": "stddev: 0.000021215784474817563",
            "extra": "mean: 1.4586798802801901 msec\nrounds: 568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5585.14522509383,
            "unit": "iter/sec",
            "range": "stddev: 0.000044404573407737386",
            "extra": "mean: 179.04637385381508 usec\nrounds: 2073"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1759.3073645638176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000078832798335286",
            "extra": "mean: 568.4055101127417 usec\nrounds: 1335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 488912.8114917,
            "unit": "iter/sec",
            "range": "stddev: 2.9202398401720085e-7",
            "extra": "mean: 2.045354460949683 usec\nrounds: 2051"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 311.6988943437173,
            "unit": "iter/sec",
            "range": "stddev: 0.0002205227935018422",
            "extra": "mean: 3.208224405497178 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.877362518203135,
            "unit": "iter/sec",
            "range": "stddev: 0.0004754649267302114",
            "extra": "mean: 18.222450098039864 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.53346296029093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000694112174829845",
            "extra": "mean: 13.416792408166629 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.39921380129476,
            "unit": "iter/sec",
            "range": "stddev: 0.012158201163155207",
            "extra": "mean: 10.70672823999871 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7319887.288389601,
            "unit": "iter/sec",
            "range": "stddev: 6.394521309658012e-9",
            "extra": "mean: 136.61412540958804 nsec\nrounds: 62898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.61829196257203,
            "unit": "iter/sec",
            "range": "stddev: 0.0007129295210227662",
            "extra": "mean: 8.290616487176763 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.1059612991013,
            "unit": "iter/sec",
            "range": "stddev: 0.0001000798810015719",
            "extra": "mean: 6.661960600001748 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 309.04235050643837,
            "unit": "iter/sec",
            "range": "stddev: 0.0002078362884671138",
            "extra": "mean: 3.235802466429813 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.3856970460952,
            "unit": "iter/sec",
            "range": "stddev: 0.00026962612437413525",
            "extra": "mean: 3.5412558442602893 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.281301579917772,
            "unit": "iter/sec",
            "range": "stddev: 0.001167124002667327",
            "extra": "mean: 97.26394972726769 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1731140.5937215404,
            "unit": "iter/sec",
            "range": "stddev: 1.3761089460331797e-7",
            "extra": "mean: 577.6538333320681 nsec\nrounds: 185220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.46440325057466,
            "unit": "iter/sec",
            "range": "stddev: 0.0002538327041423013",
            "extra": "mean: 8.441354301889408 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.88426652997674,
            "unit": "iter/sec",
            "range": "stddev: 0.00002866093425796341",
            "extra": "mean: 3.0685740390231886 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8415902707193269,
            "unit": "iter/sec",
            "range": "stddev: 0.002631707793434682",
            "extra": "mean: 1.188226664199999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.82729251434806,
            "unit": "iter/sec",
            "range": "stddev: 0.000059500776568851036",
            "extra": "mean: 8.942360827270269 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5641.96760745723,
            "unit": "iter/sec",
            "range": "stddev: 0.00004380643930233673",
            "extra": "mean: 177.24313033599435 usec\nrounds: 2202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5492.326014123878,
            "unit": "iter/sec",
            "range": "stddev: 0.000045043360634342514",
            "extra": "mean: 182.07222175603454 usec\nrounds: 2859"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5835.104035645436,
            "unit": "iter/sec",
            "range": "stddev: 0.00004505573788782663",
            "extra": "mean: 171.37655025363867 usec\nrounds: 2766"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 298.1009361074606,
            "unit": "iter/sec",
            "range": "stddev: 0.00020284967496475668",
            "extra": "mean: 3.3545684661638098 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17945453911856635,
            "unit": "iter/sec",
            "range": "stddev: 0.012593243154537451",
            "extra": "mean: 5.572441939400017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.0904811096019,
            "unit": "iter/sec",
            "range": "stddev: 0.0006526720486443703",
            "extra": "mean: 9.892128210526607 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.490332921929346,
            "unit": "iter/sec",
            "range": "stddev: 0.0007161635225600845",
            "extra": "mean: 182.13831733333072 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 122.0215402434699,
            "unit": "iter/sec",
            "range": "stddev: 0.0006565713118063067",
            "extra": "mean: 8.195274358975452 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2485206.629488815,
            "unit": "iter/sec",
            "range": "stddev: 1.9268241476429747e-8",
            "extra": "mean: 402.3810286575614 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5827.44574437519,
            "unit": "iter/sec",
            "range": "stddev: 0.00007980173003110366",
            "extra": "mean: 171.60176925975284 usec\nrounds: 2700"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.23037805162942,
            "unit": "iter/sec",
            "range": "stddev: 0.0007225201155095705",
            "extra": "mean: 8.317365512820556 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.89538483482808,
            "unit": "iter/sec",
            "range": "stddev: 0.0007250647417759941",
            "extra": "mean: 9.443282174759222 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.0655477966934,
            "unit": "iter/sec",
            "range": "stddev: 0.0007231162022541547",
            "extra": "mean: 8.844427144138818 msec\nrounds: 111"
          }
        ]
      }
    ]
  }
}