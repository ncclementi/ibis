window.BENCHMARK_DATA = {
  "lastUpdate": 1677931412047,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "bda9e4b9f4aa4ccac8fdbd6b8c2ed73a65a0c381",
          "message": "chore(flake/nixpkgs): `de098f65` -> `dcc47fef`",
          "timestamp": "2023-03-04T11:57:54Z",
          "tree_id": "46cad40d355346c591e4c30412f7a62160ce1890",
          "url": "https://github.com/ibis-project/ibis/commit/bda9e4b9f4aa4ccac8fdbd6b8c2ed73a65a0c381"
        },
        "date": 1677931322479,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 254.12358949180253,
            "unit": "iter/sec",
            "range": "stddev: 0.00016976954913966913",
            "extra": "mean: 3.935093164707001 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1676577.180201746,
            "unit": "iter/sec",
            "range": "stddev: 3.212932278359443e-7",
            "extra": "mean: 596.4533048694292 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 104.29337364128965,
            "unit": "iter/sec",
            "range": "stddev: 0.009010059820180067",
            "extra": "mean: 9.588336872095399 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 85.95119274861295,
            "unit": "iter/sec",
            "range": "stddev: 0.0002988154787744727",
            "extra": "mean: 11.634509865671847 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 446511.61990179244,
            "unit": "iter/sec",
            "range": "stddev: 6.193870540704554e-7",
            "extra": "mean: 2.239583373485205 usec\nrounds: 2081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5145508.243617956,
            "unit": "iter/sec",
            "range": "stddev: 4.130059991133212e-8",
            "extra": "mean: 194.344261568262 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 163.6534167474971,
            "unit": "iter/sec",
            "range": "stddev: 0.005347037893985796",
            "extra": "mean: 6.110474317459027 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 15.837557459431531,
            "unit": "iter/sec",
            "range": "stddev: 0.19764099601088725",
            "extra": "mean: 63.14104953125099 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 283.56218946454834,
            "unit": "iter/sec",
            "range": "stddev: 0.0002736442799273872",
            "extra": "mean: 3.5265632625009147 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4528.864059618789,
            "unit": "iter/sec",
            "range": "stddev: 0.0000544293034457774",
            "extra": "mean: 220.80592105124342 usec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8018558787527705,
            "unit": "iter/sec",
            "range": "stddev: 0.01974736392866439",
            "extra": "mean: 1.2471069010000009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1723751.3070397242,
            "unit": "iter/sec",
            "range": "stddev: 3.989720692014693e-7",
            "extra": "mean: 580.1300894833519 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1495154725672029,
            "unit": "iter/sec",
            "range": "stddev: 0.11515459797055706",
            "extra": "mean: 6.688271005200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4561.485430229579,
            "unit": "iter/sec",
            "range": "stddev: 0.000028359442723584576",
            "extra": "mean: 219.2268319817192 usec\nrounds: 1357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1618.2514376006166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000512532286700437",
            "extra": "mean: 617.9509418404728 usec\nrounds: 1152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 130.21372838623267,
            "unit": "iter/sec",
            "range": "stddev: 0.00009924244753635094",
            "extra": "mean: 7.679681800016169 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148856.29882461377,
            "unit": "iter/sec",
            "range": "stddev: 0.000001340731078050004",
            "extra": "mean: 6.717888378900413 usec\nrounds: 32467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.32482584292625,
            "unit": "iter/sec",
            "range": "stddev: 0.0007571604872145647",
            "extra": "mean: 20.6932975454557 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 276.6577116299005,
            "unit": "iter/sec",
            "range": "stddev: 0.0002524956929459415",
            "extra": "mean: 3.614574826447463 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.86354265589347,
            "unit": "iter/sec",
            "range": "stddev: 0.0003655081894184647",
            "extra": "mean: 13.357636634916544 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.57994944610681,
            "unit": "iter/sec",
            "range": "stddev: 0.0008029067794308743",
            "extra": "mean: 8.362605977272867 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5969107.581167767,
            "unit": "iter/sec",
            "range": "stddev: 1.857678649429488e-8",
            "extra": "mean: 167.52923052598172 nsec\nrounds: 50762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 271.98965422034615,
            "unit": "iter/sec",
            "range": "stddev: 0.00031469027545875163",
            "extra": "mean: 3.676610431622789 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.90778567415191,
            "unit": "iter/sec",
            "range": "stddev: 0.0013788454136797457",
            "extra": "mean: 71.90217216666876 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 266.81635119563236,
            "unit": "iter/sec",
            "range": "stddev: 0.0003812500467948118",
            "extra": "mean: 3.7478962421864104 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7712764606728385,
            "unit": "iter/sec",
            "range": "stddev: 0.0149316806401672",
            "extra": "mean: 1.2965519512000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 226.5945288483446,
            "unit": "iter/sec",
            "range": "stddev: 0.010383503688697518",
            "extra": "mean: 4.413169219409004 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.940001927826231,
            "unit": "iter/sec",
            "range": "stddev: 0.00023391564325387441",
            "extra": "mean: 202.4290707999853 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7471616581968878,
            "unit": "iter/sec",
            "range": "stddev: 0.019783293158499787",
            "extra": "mean: 1.3383984429999827 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 316.0742591123822,
            "unit": "iter/sec",
            "range": "stddev: 0.00017062666106099723",
            "extra": "mean: 3.163813474745641 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6155792579093116,
            "unit": "iter/sec",
            "range": "stddev: 0.01956224291028434",
            "extra": "mean: 1.624486184600005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 686.360556717101,
            "unit": "iter/sec",
            "range": "stddev: 0.0001024017609617125",
            "extra": "mean: 1.456960179621995 msec\nrounds: 579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 79.45504423449555,
            "unit": "iter/sec",
            "range": "stddev: 0.016543309974222924",
            "extra": "mean: 12.585733349398202 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.07520899889741,
            "unit": "iter/sec",
            "range": "stddev: 0.0005816548056220087",
            "extra": "mean: 8.25932912499954 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1078.5800788345884,
            "unit": "iter/sec",
            "range": "stddev: 0.00007319483479291867",
            "extra": "mean: 927.1448820754276 usec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 125.40587611809438,
            "unit": "iter/sec",
            "range": "stddev: 0.0008370234700885601",
            "extra": "mean: 7.974107999997565 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4974.7521799930155,
            "unit": "iter/sec",
            "range": "stddev: 0.0001043768982161738",
            "extra": "mean: 201.0150383011449 usec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11857.06863317327,
            "unit": "iter/sec",
            "range": "stddev: 0.000009332220303502749",
            "extra": "mean: 84.33787734029276 usec\nrounds: 4647"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.3078155052747484,
            "unit": "iter/sec",
            "range": "stddev: 0.006362543033654452",
            "extra": "mean: 433.31020080001963 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 147.25106988504794,
            "unit": "iter/sec",
            "range": "stddev: 0.0003779276294849853",
            "extra": "mean: 6.791122134329166 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 138.24902397773425,
            "unit": "iter/sec",
            "range": "stddev: 0.004185829105260571",
            "extra": "mean: 7.233324122136699 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 252.7504588573572,
            "unit": "iter/sec",
            "range": "stddev: 0.0019220004142067562",
            "extra": "mean: 3.956471551113433 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12372.879216936193,
            "unit": "iter/sec",
            "range": "stddev: 0.000007978800789196523",
            "extra": "mean: 80.82193178053367 usec\nrounds: 6098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 126.35909479650692,
            "unit": "iter/sec",
            "range": "stddev: 0.0007483369055072931",
            "extra": "mean: 7.913953495871705 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2373894.721771263,
            "unit": "iter/sec",
            "range": "stddev: 8.015416210551032e-8",
            "extra": "mean: 421.24867241544536 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 69.20102455436238,
            "unit": "iter/sec",
            "range": "stddev: 0.0004702154933570604",
            "extra": "mean: 14.450653100004729 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5562256822423506,
            "unit": "iter/sec",
            "range": "stddev: 0.010004487301456547",
            "extra": "mean: 642.5803220000262 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 107.19879023861449,
            "unit": "iter/sec",
            "range": "stddev: 0.0004240839264212356",
            "extra": "mean: 9.328463481482332 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 70.25918254015275,
            "unit": "iter/sec",
            "range": "stddev: 0.018397428703372902",
            "extra": "mean: 14.233015014493024 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.88104917385307,
            "unit": "iter/sec",
            "range": "stddev: 0.0010171432468486677",
            "extra": "mean: 10.88363714815496 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 667158.87175621,
            "unit": "iter/sec",
            "range": "stddev: 6.032802286315865e-7",
            "extra": "mean: 1.4988933555925419 usec\nrounds: 22936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 119.3937486460856,
            "unit": "iter/sec",
            "range": "stddev: 0.0002990845891466549",
            "extra": "mean: 8.375647898988936 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1570731.7039226948,
            "unit": "iter/sec",
            "range": "stddev: 4.854076839564349e-7",
            "extra": "mean: 636.6459641087222 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4582.994605119138,
            "unit": "iter/sec",
            "range": "stddev: 0.00008451665536107983",
            "extra": "mean: 218.19794395634125 usec\nrounds: 1820"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10758.077927606062,
            "unit": "iter/sec",
            "range": "stddev: 0.000016689629525256728",
            "extra": "mean: 92.95340735856938 usec\nrounds: 5300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7468.374839947174,
            "unit": "iter/sec",
            "range": "stddev: 0.000020280640817204475",
            "extra": "mean: 133.89793916758913 usec\nrounds: 1611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.01247418958724,
            "unit": "iter/sec",
            "range": "stddev: 0.0002613004533922782",
            "extra": "mean: 3.5840691456701905 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 273.91798893729043,
            "unit": "iter/sec",
            "range": "stddev: 0.0003420708921310788",
            "extra": "mean: 3.6507277374504072 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 107.32896922466425,
            "unit": "iter/sec",
            "range": "stddev: 0.014380621226718512",
            "extra": "mean: 9.317149016001167 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 173.1821140237724,
            "unit": "iter/sec",
            "range": "stddev: 0.00033080812373170786",
            "extra": "mean: 5.774268351192039 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.48452927428726,
            "unit": "iter/sec",
            "range": "stddev: 0.0006256400245437637",
            "extra": "mean: 18.023041973673582 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 92.36166769729432,
            "unit": "iter/sec",
            "range": "stddev: 0.0009399093948568836",
            "extra": "mean: 10.82700242353132 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4888959.767368714,
            "unit": "iter/sec",
            "range": "stddev: 4.659803490664861e-8",
            "extra": "mean: 204.54248911483816 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10416134.11750038,
            "unit": "iter/sec",
            "range": "stddev: 1.8027487084946065e-8",
            "extra": "mean: 96.00490822403378 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 282.28399705561515,
            "unit": "iter/sec",
            "range": "stddev: 0.0002999016910368373",
            "extra": "mean: 3.5425316717581463 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4726.079894423664,
            "unit": "iter/sec",
            "range": "stddev: 0.00006504704502763502",
            "extra": "mean: 211.59185251605825 usec\nrounds: 3736"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 471.28312240605857,
            "unit": "iter/sec",
            "range": "stddev: 0.00012295441996548282",
            "extra": "mean: 2.121866777012222 msec\nrounds: 435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.47480927036983,
            "unit": "iter/sec",
            "range": "stddev: 0.0014239728541716975",
            "extra": "mean: 18.70039395454367 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4616.163231083011,
            "unit": "iter/sec",
            "range": "stddev: 0.00006491558247272933",
            "extra": "mean: 216.6301211505008 usec\nrounds: 1981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.904348595083498,
            "unit": "iter/sec",
            "range": "stddev: 0.0347775919011148",
            "extra": "mean: 37.16871257692297 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 67093.78274751341,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025928750552962655",
            "extra": "mean: 14.904510657316626 usec\nrounds: 12151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 183.13568211354269,
            "unit": "iter/sec",
            "range": "stddev: 0.00028332113699437137",
            "extra": "mean: 5.460432333334188 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.282309996207083,
            "unit": "iter/sec",
            "range": "stddev: 0.001387445661370057",
            "extra": "mean: 44.878650380962334 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 125.18345361289721,
            "unit": "iter/sec",
            "range": "stddev: 0.0008354991437314863",
            "extra": "mean: 7.988276174999005 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5040.778057214097,
            "unit": "iter/sec",
            "range": "stddev: 0.00006946093114532629",
            "extra": "mean: 198.38207289623722 usec\nrounds: 3114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.844818883623056,
            "unit": "iter/sec",
            "range": "stddev: 0.0016457650908280187",
            "extra": "mean: 26.42369628125607 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3713.2068239058126,
            "unit": "iter/sec",
            "range": "stddev: 0.0034994897552447376",
            "extra": "mean: 269.30899554583107 usec\nrounds: 2245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.08685229349808,
            "unit": "iter/sec",
            "range": "stddev: 0.0010470956333460302",
            "extra": "mean: 23.760389421056516 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.88718425543027,
            "unit": "iter/sec",
            "range": "stddev: 0.000939386653800289",
            "extra": "mean: 10.538831011236075 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.92076529535143,
            "unit": "iter/sec",
            "range": "stddev: 0.0009985466772998808",
            "extra": "mean: 10.998587580642898 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4690.598171709903,
            "unit": "iter/sec",
            "range": "stddev: 0.00006741518212949",
            "extra": "mean: 213.1924252286701 usec\nrounds: 2949"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 604.3086401946097,
            "unit": "iter/sec",
            "range": "stddev: 0.00011171193286575379",
            "extra": "mean: 1.6547835551018486 msec\nrounds: 490"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.93689191364062,
            "unit": "iter/sec",
            "range": "stddev: 0.0004619105936669619",
            "extra": "mean: 11.371791500000487 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 122.99777181408774,
            "unit": "iter/sec",
            "range": "stddev: 0.0009091685252669793",
            "extra": "mean: 8.130228582608058 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 95.73956667223582,
            "unit": "iter/sec",
            "range": "stddev: 0.0009177475515195399",
            "extra": "mean: 10.445002361703784 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 115.92909441444036,
            "unit": "iter/sec",
            "range": "stddev: 0.000828187996560492",
            "extra": "mean: 8.625962318182639 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.69711462171138,
            "unit": "iter/sec",
            "range": "stddev: 0.0009522763170848608",
            "extra": "mean: 10.449635853212275 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.513845406724647,
            "unit": "iter/sec",
            "range": "stddev: 0.0019684313882495637",
            "extra": "mean: 105.1099694444449 msec\nrounds: 9"
          }
        ]
      }
    ]
  }
}