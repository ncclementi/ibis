window.BENCHMARK_DATA = {
  "lastUpdate": 1680293776822,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "sam.albers@gmail.com",
            "name": "Sam Albers",
            "username": "boshek"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "eec370606bf25ec2fbb53451036d5000f5b24afe",
          "message": "docs(penguins): change to flipper",
          "timestamp": "2023-03-31T16:11:23-04:00",
          "tree_id": "33b55083956d6298b65e21a6bb634aed39465689",
          "url": "https://github.com/ibis-project/ibis/commit/eec370606bf25ec2fbb53451036d5000f5b24afe"
        },
        "date": 1680293695067,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1159.722246067247,
            "unit": "iter/sec",
            "range": "stddev: 0.00006683058814667662",
            "extra": "mean: 862.275431372569 usec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.70208986348246,
            "unit": "iter/sec",
            "range": "stddev: 0.0003031348574827486",
            "extra": "mean: 6.591866999985996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13845.284352397532,
            "unit": "iter/sec",
            "range": "stddev: 0.000002133794745509921",
            "extra": "mean: 72.22675782941461 usec\nrounds: 958"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.31135115133445,
            "unit": "iter/sec",
            "range": "stddev: 0.0005980026038823957",
            "extra": "mean: 8.243251686748687 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.20963215261933,
            "unit": "iter/sec",
            "range": "stddev: 0.0006782529642146706",
            "extra": "mean: 8.250169415091241 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 320.871182257495,
            "unit": "iter/sec",
            "range": "stddev: 0.00021585016336382907",
            "extra": "mean: 3.1165154594578484 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.331106508783265,
            "unit": "iter/sec",
            "range": "stddev: 0.0030397507755046643",
            "extra": "mean: 96.79505279999034 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.74437235282655,
            "unit": "iter/sec",
            "range": "stddev: 0.00008729130488583015",
            "extra": "mean: 13.202300962266579 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 101.96356719172404,
            "unit": "iter/sec",
            "range": "stddev: 0.010820946203836125",
            "extra": "mean: 9.80742462765824 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.590838785222144,
            "unit": "iter/sec",
            "range": "stddev: 0.000634187369094132",
            "extra": "mean: 178.86403783332602 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.894761957994,
            "unit": "iter/sec",
            "range": "stddev: 0.00028828185009559454",
            "extra": "mean: 3.4977905616435474 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.17352204356138,
            "unit": "iter/sec",
            "range": "stddev: 0.00015130857167757893",
            "extra": "mean: 6.166234705881212 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.045284597973634,
            "unit": "iter/sec",
            "range": "stddev: 0.0008825296824774827",
            "extra": "mean: 26.99398886666131 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5684.211657428761,
            "unit": "iter/sec",
            "range": "stddev: 0.00004691046386816228",
            "extra": "mean: 175.92589091806403 usec\nrounds: 2026"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 338.829568883758,
            "unit": "iter/sec",
            "range": "stddev: 0.000010869769699284325",
            "extra": "mean: 2.951336281819811 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.47870655194967,
            "unit": "iter/sec",
            "range": "stddev: 0.0006359097713665624",
            "extra": "mean: 9.21839900000197 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6757447608065683,
            "unit": "iter/sec",
            "range": "stddev: 0.04755962408138514",
            "extra": "mean: 1.4798486913999909 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5279.659974901891,
            "unit": "iter/sec",
            "range": "stddev: 0.00005068723392123314",
            "extra": "mean: 189.40613690156866 usec\nrounds: 2447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5520.995802924842,
            "unit": "iter/sec",
            "range": "stddev: 0.00004693057362847709",
            "extra": "mean: 181.12674519155274 usec\nrounds: 2080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5053.147402293332,
            "unit": "iter/sec",
            "range": "stddev: 0.0000414653980163651",
            "extra": "mean: 197.89646340935113 usec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.7536830786495,
            "unit": "iter/sec",
            "range": "stddev: 0.00002074339037356899",
            "extra": "mean: 1.3302229473684914 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 287.3111410896082,
            "unit": "iter/sec",
            "range": "stddev: 0.000047762323089337884",
            "extra": "mean: 3.4805472429908813 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.55977662135857,
            "unit": "iter/sec",
            "range": "stddev: 0.00005475716900025562",
            "extra": "mean: 5.08751086915581 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 318.85753800653674,
            "unit": "iter/sec",
            "range": "stddev: 0.00020606858176141715",
            "extra": "mean: 3.136196830258093 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.10294581262276,
            "unit": "iter/sec",
            "range": "stddev: 0.0006566805715442236",
            "extra": "mean: 9.25044172000014 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7067049149159765,
            "unit": "iter/sec",
            "range": "stddev: 0.00220883941714751",
            "extra": "mean: 585.9243687999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8201.417248296913,
            "unit": "iter/sec",
            "range": "stddev: 0.000014452958140325582",
            "extra": "mean: 121.93014569617922 usec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.69690152478802,
            "unit": "iter/sec",
            "range": "stddev: 0.0007071292756373629",
            "extra": "mean: 8.354435137929698 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.23112827690932,
            "unit": "iter/sec",
            "range": "stddev: 0.000771335713610632",
            "extra": "mean: 9.781756465519392 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 158.19956780859332,
            "unit": "iter/sec",
            "range": "stddev: 0.003407365747561214",
            "extra": "mean: 6.321129784690099 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.97515039513408,
            "unit": "iter/sec",
            "range": "stddev: 0.00013181844857210786",
            "extra": "mean: 6.1737865194786155 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.44123156651991,
            "unit": "iter/sec",
            "range": "stddev: 0.030642439270716866",
            "extra": "mean: 28.215723771424045 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 483688.5326938324,
            "unit": "iter/sec",
            "range": "stddev: 1.9474885795788595e-7",
            "extra": "mean: 2.0674461609222914 usec\nrounds: 2071"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.887340616472,
            "unit": "iter/sec",
            "range": "stddev: 0.00003092146051554524",
            "extra": "mean: 1.4665179134956998 msec\nrounds: 578"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.83929640453152,
            "unit": "iter/sec",
            "range": "stddev: 0.0006913346870068633",
            "extra": "mean: 8.275453679011157 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.1514088474208,
            "unit": "iter/sec",
            "range": "stddev: 0.000022211533940467284",
            "extra": "mean: 1.8582131042669527 msec\nrounds: 422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1994010.35882739,
            "unit": "iter/sec",
            "range": "stddev: 8.994437443221972e-8",
            "extra": "mean: 501.501908238865 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.02867139499669,
            "unit": "iter/sec",
            "range": "stddev: 0.019455951064147294",
            "extra": "mean: 12.653635476191365 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.15917690132811,
            "unit": "iter/sec",
            "range": "stddev: 0.000716280680362202",
            "extra": "mean: 8.32229402520938 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.96863184707561,
            "unit": "iter/sec",
            "range": "stddev: 0.0008126268636034101",
            "extra": "mean: 9.806937505052728 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1780.4836735265112,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061934714502956175",
            "extra": "mean: 561.6451388286825 usec\nrounds: 1347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.98502452723864,
            "unit": "iter/sec",
            "range": "stddev: 0.00005971766130591232",
            "extra": "mean: 10.310870207793226 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5543715.7929182025,
            "unit": "iter/sec",
            "range": "stddev: 9.596291715128188e-9",
            "extra": "mean: 180.3844275851955 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8436617129478162,
            "unit": "iter/sec",
            "range": "stddev: 0.006168280929786488",
            "extra": "mean: 1.1853092117999835 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17071727481453725,
            "unit": "iter/sec",
            "range": "stddev: 0.01175310659007863",
            "extra": "mean: 5.8576380222000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1992173.7957179311,
            "unit": "iter/sec",
            "range": "stddev: 1.0673255309251836e-7",
            "extra": "mean: 501.96423733182587 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.565818575365618,
            "unit": "iter/sec",
            "range": "stddev: 0.0001042297479317115",
            "extra": "mean: 64.2433287499955 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.54682609938872,
            "unit": "iter/sec",
            "range": "stddev: 0.0005105621360322216",
            "extra": "mean: 19.39983653061151 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.58212652900578,
            "unit": "iter/sec",
            "range": "stddev: 0.0008204952848537675",
            "extra": "mean: 42.40499680001335 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.34876751469486,
            "unit": "iter/sec",
            "range": "stddev: 0.00040467776252694164",
            "extra": "mean: 11.580941208336526 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6122498.181599189,
            "unit": "iter/sec",
            "range": "stddev: 9.09538883356722e-9",
            "extra": "mean: 163.33202074342273 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.485104644778,
            "unit": "iter/sec",
            "range": "stddev: 0.00009037040798908444",
            "extra": "mean: 8.299781146792085 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.0266307157689,
            "unit": "iter/sec",
            "range": "stddev: 0.0003920959289434429",
            "extra": "mean: 7.244978703126126 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 308.02515057284234,
            "unit": "iter/sec",
            "range": "stddev: 0.00021417619907474356",
            "extra": "mean: 3.2464881459850736 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.3641480551769,
            "unit": "iter/sec",
            "range": "stddev: 0.0007715324243507504",
            "extra": "mean: 8.377724939131163 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8232193306110754,
            "unit": "iter/sec",
            "range": "stddev: 0.003758377987229069",
            "extra": "mean: 1.2147430980000196 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149202.94094134687,
            "unit": "iter/sec",
            "range": "stddev: 3.8263731995935884e-7",
            "extra": "mean: 6.702280757274817 usec\nrounds: 41153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5690.166598335958,
            "unit": "iter/sec",
            "range": "stddev: 0.00004953658598185692",
            "extra": "mean: 175.74177885976866 usec\nrounds: 2261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 296.05549804128174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000341415022119808",
            "extra": "mean: 3.377745073528615 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.9785181091602,
            "unit": "iter/sec",
            "range": "stddev: 0.00024422859995676985",
            "extra": "mean: 3.2364709563617824 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7032663.696359382,
            "unit": "iter/sec",
            "range": "stddev: 4.4377656614496516e-9",
            "extra": "mean: 142.19363290721873 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5496346973152684,
            "unit": "iter/sec",
            "range": "stddev: 0.0006659697621721112",
            "extra": "mean: 392.21304960000225 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12026.08864619789,
            "unit": "iter/sec",
            "range": "stddev: 0.000023356086365954595",
            "extra": "mean: 83.1525552005768 usec\nrounds: 4067"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73400.18410246234,
            "unit": "iter/sec",
            "range": "stddev: 4.809615312926042e-7",
            "extra": "mean: 13.623944029950373 usec\nrounds: 12739"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.97499777665594,
            "unit": "iter/sec",
            "range": "stddev: 0.03101590816995299",
            "extra": "mean: 27.797083024391366 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.4921984661855,
            "unit": "iter/sec",
            "range": "stddev: 0.00012432752285784302",
            "extra": "mean: 9.050412733945512 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12033737.74544996,
            "unit": "iter/sec",
            "range": "stddev: 3.527744359572127e-9",
            "extra": "mean: 83.09970028868153 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.48946154470486,
            "unit": "iter/sec",
            "range": "stddev: 0.0010406637269648371",
            "extra": "mean: 19.806113382979348 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 743341.7942874013,
            "unit": "iter/sec",
            "range": "stddev: 3.0089123117300956e-7",
            "extra": "mean: 1.3452761672826994 usec\nrounds: 24630"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5355.195542129023,
            "unit": "iter/sec",
            "range": "stddev: 0.00007631973178361644",
            "extra": "mean: 186.734544449975 usec\nrounds: 2081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5594.5884545771905,
            "unit": "iter/sec",
            "range": "stddev: 0.000022788884419696715",
            "extra": "mean: 178.7441575227672 usec\nrounds: 2260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1980557.7103472732,
            "unit": "iter/sec",
            "range": "stddev: 1.0967357808171578e-7",
            "extra": "mean: 504.90828657785426 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.03923634003375,
            "unit": "iter/sec",
            "range": "stddev: 0.00022658568535331312",
            "extra": "mean: 10.521970067416946 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.09297699702499,
            "unit": "iter/sec",
            "range": "stddev: 0.0007963453607238186",
            "extra": "mean: 9.606796047619815 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5182.982417377662,
            "unit": "iter/sec",
            "range": "stddev: 0.000051536563106528965",
            "extra": "mean: 192.939107153281 usec\nrounds: 3313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.90989398515967,
            "unit": "iter/sec",
            "range": "stddev: 0.00024239115900162012",
            "extra": "mean: 3.3013117757355013 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.42378205229848,
            "unit": "iter/sec",
            "range": "stddev: 0.0007799682572122464",
            "extra": "mean: 10.819726024998033 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1746061.8013941557,
            "unit": "iter/sec",
            "range": "stddev: 1.2247167013167332e-7",
            "extra": "mean: 572.7174142413188 nsec\nrounds: 104156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.41485884589615,
            "unit": "iter/sec",
            "range": "stddev: 0.0002468146056609134",
            "extra": "mean: 16.021825867923933 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12680.97100978371,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017225070445839258",
            "extra": "mean: 78.85831449567017 usec\nrounds: 5981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.44179516060433,
            "unit": "iter/sec",
            "range": "stddev: 0.0003095125158860822",
            "extra": "mean: 3.170156952381212 msec\nrounds: 294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 311.06857226701857,
            "unit": "iter/sec",
            "range": "stddev: 0.00025156522687008775",
            "extra": "mean: 3.2147252700977087 msec\nrounds: 311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8082361431647729,
            "unit": "iter/sec",
            "range": "stddev: 0.016537143244898248",
            "extra": "mean: 1.237262164599997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.2166413750986,
            "unit": "iter/sec",
            "range": "stddev: 0.0007381898190084029",
            "extra": "mean: 9.32691033009968 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5628.521871484555,
            "unit": "iter/sec",
            "range": "stddev: 0.00005598794385735796",
            "extra": "mean: 177.666538894739 usec\nrounds: 3548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.24473676541308,
            "unit": "iter/sec",
            "range": "stddev: 0.0006230100917528331",
            "extra": "mean: 22.60155835714494 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.30635286698352,
            "unit": "iter/sec",
            "range": "stddev: 0.0007444028809354421",
            "extra": "mean: 8.82563046728681 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 237.7944106573841,
            "unit": "iter/sec",
            "range": "stddev: 0.0037683648820381927",
            "extra": "mean: 4.205313309238404 msec\nrounds: 249"
          }
        ]
      }
    ]
  }
}