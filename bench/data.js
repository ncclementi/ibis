window.BENCHMARK_DATA = {
  "lastUpdate": 1678724614145,
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
          "id": "d6e56c50c072fabf970fd5fe8bdacede582f4864",
          "message": "fix(bigquery): ensure that memtables are translated correctly",
          "timestamp": "2023-03-13T12:16:28-04:00",
          "tree_id": "f682986d5d5a4f86058416b86fd96ff362619681",
          "url": "https://github.com/ibis-project/ibis/commit/d6e56c50c072fabf970fd5fe8bdacede582f4864"
        },
        "date": 1678724520598,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 56.17041894101322,
            "unit": "iter/sec",
            "range": "stddev: 0.019152023770673047",
            "extra": "mean: 17.80296495652168 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 378063.1000934336,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041926317788562726",
            "extra": "mean: 2.6450611015802985 usec\nrounds: 1162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.4999625678025485,
            "unit": "iter/sec",
            "range": "stddev: 0.046763949629159675",
            "extra": "mean: 2.0001497400000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5288485285794511,
            "unit": "iter/sec",
            "range": "stddev: 0.026042598181471976",
            "extra": "mean: 1.8909005999999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 74.49251899015371,
            "unit": "iter/sec",
            "range": "stddev: 0.001485836288754023",
            "extra": "mean: 13.424166796295053 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.9970835168199885,
            "unit": "iter/sec",
            "range": "stddev: 0.010575874560833228",
            "extra": "mean: 250.1824132000081 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 78.59690451578234,
            "unit": "iter/sec",
            "range": "stddev: 0.0013975570692797566",
            "extra": "mean: 12.72314738297612 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 874.0003202924538,
            "unit": "iter/sec",
            "range": "stddev: 0.00017519585067959185",
            "extra": "mean: 1.1441643404265398 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5150682.195005682,
            "unit": "iter/sec",
            "range": "stddev: 2.4739849683512705e-7",
            "extra": "mean: 194.1490393194317 nsec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 98.82443935702759,
            "unit": "iter/sec",
            "range": "stddev: 0.0010520353032538031",
            "extra": "mean: 10.118954445946859 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9786.14465164146,
            "unit": "iter/sec",
            "range": "stddev: 0.00007611422010494399",
            "extra": "mean: 102.18528701517475 usec\nrounds: 2526"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 193.58034973494364,
            "unit": "iter/sec",
            "range": "stddev: 0.0006254484243507003",
            "extra": "mean: 5.165813582676298 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 72.32539339137635,
            "unit": "iter/sec",
            "range": "stddev: 0.0024182471144682063",
            "extra": "mean: 13.826402499999869 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 10.891642447482042,
            "unit": "iter/sec",
            "range": "stddev: 0.003996546162652124",
            "extra": "mean: 91.81351709091246 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3449.760159729394,
            "unit": "iter/sec",
            "range": "stddev: 0.0001114646509921214",
            "extra": "mean: 289.8752242760093 usec\nrounds: 2002"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3426.3651168744154,
            "unit": "iter/sec",
            "range": "stddev: 0.00009914725545276736",
            "extra": "mean: 291.85447723452654 usec\nrounds: 1186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1310829.8551874233,
            "unit": "iter/sec",
            "range": "stddev: 0.000007841081311097319",
            "extra": "mean: 762.8755143489002 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 161.34147791297545,
            "unit": "iter/sec",
            "range": "stddev: 0.005106069024591046",
            "extra": "mean: 6.198034212500403 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8799805.07521554,
            "unit": "iter/sec",
            "range": "stddev: 9.936843071064555e-8",
            "extra": "mean: 113.63888079930102 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.674617544230483,
            "unit": "iter/sec",
            "range": "stddev: 0.0099645815376538",
            "extra": "mean: 597.1512740000094 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 195.03398885179212,
            "unit": "iter/sec",
            "range": "stddev: 0.0012097351797465059",
            "extra": "mean: 5.127311428573139 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 214.68151588109703,
            "unit": "iter/sec",
            "range": "stddev: 0.0005478564721627628",
            "extra": "mean: 4.658062879311219 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 64.77851713240877,
            "unit": "iter/sec",
            "range": "stddev: 0.0006214289171017907",
            "extra": "mean: 15.437216600003012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 76.11343465518674,
            "unit": "iter/sec",
            "range": "stddev: 0.0011646834773144956",
            "extra": "mean: 13.13828504166518 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 25.746329275872256,
            "unit": "iter/sec",
            "range": "stddev: 0.004319858160839959",
            "extra": "mean: 38.84048826086962 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 84.85325094416433,
            "unit": "iter/sec",
            "range": "stddev: 0.0010804836976693968",
            "extra": "mean: 11.785052297619407 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5844.686140565333,
            "unit": "iter/sec",
            "range": "stddev: 0.000046114690259421255",
            "extra": "mean: 171.09558596473653 usec\nrounds: 3135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 213.9922710641976,
            "unit": "iter/sec",
            "range": "stddev: 0.0014127985690031311",
            "extra": "mean: 4.673065971153698 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.27410825524004,
            "unit": "iter/sec",
            "range": "stddev: 0.0015899279689435357",
            "extra": "mean: 11.866040717646175 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.46136629348669,
            "unit": "iter/sec",
            "range": "stddev: 0.002245892737040381",
            "extra": "mean: 37.7909435555542 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 207.8935368054556,
            "unit": "iter/sec",
            "range": "stddev: 0.0009155208902193949",
            "extra": "mean: 4.810154348068014 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09375569267396908,
            "unit": "iter/sec",
            "range": "stddev: 0.1633347612557815",
            "extra": "mean: 10.666019006199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3248.678970079528,
            "unit": "iter/sec",
            "range": "stddev: 0.00016318388280422096",
            "extra": "mean: 307.81742647089567 usec\nrounds: 1632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 84.00584836250019,
            "unit": "iter/sec",
            "range": "stddev: 0.0014539020458246446",
            "extra": "mean: 11.903933112904497 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 191.33109724458046,
            "unit": "iter/sec",
            "range": "stddev: 0.0009528872249060349",
            "extra": "mean: 5.226541918179092 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 80.87746655909045,
            "unit": "iter/sec",
            "range": "stddev: 0.001682266350786922",
            "extra": "mean: 12.364383338706375 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 581668.1963387437,
            "unit": "iter/sec",
            "range": "stddev: 0.000002496816156609796",
            "extra": "mean: 1.719193186587142 usec\nrounds: 18904"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1404321.1376595155,
            "unit": "iter/sec",
            "range": "stddev: 0.000003362199905569091",
            "extra": "mean: 712.087836024907 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3437.4192234176244,
            "unit": "iter/sec",
            "range": "stddev: 0.00016453881356795724",
            "extra": "mean: 290.9159270383548 usec\nrounds: 1631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3505.4254418262735,
            "unit": "iter/sec",
            "range": "stddev: 0.00017956265877129684",
            "extra": "mean: 285.2720779817856 usec\nrounds: 3270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 78.69385830318764,
            "unit": "iter/sec",
            "range": "stddev: 0.002470075526820778",
            "extra": "mean: 12.707471987804327 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1394055.105708187,
            "unit": "iter/sec",
            "range": "stddev: 0.000003556555510294828",
            "extra": "mean: 717.3317581961691 nsec\nrounds: 35336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 188.42973248894694,
            "unit": "iter/sec",
            "range": "stddev: 0.0007092998713842149",
            "extra": "mean: 5.307018095239608 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.064449630977419,
            "unit": "iter/sec",
            "range": "stddev: 0.0056369335054079605",
            "extra": "mean: 141.55384385713887 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8326.131761377594,
            "unit": "iter/sec",
            "range": "stddev: 0.00007130648515559775",
            "extra": "mean: 120.10379233231662 usec\nrounds: 2817"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 73.42112255001113,
            "unit": "iter/sec",
            "range": "stddev: 0.0019355764630512667",
            "extra": "mean: 13.620058714286824 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 20.953169310387327,
            "unit": "iter/sec",
            "range": "stddev: 0.050617795714702714",
            "extra": "mean: 47.72547700000018 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.02542131514079,
            "unit": "iter/sec",
            "range": "stddev: 0.0025922859546510936",
            "extra": "mean: 20.397580952377545 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 104.23723744816182,
            "unit": "iter/sec",
            "range": "stddev: 0.0009324478949845238",
            "extra": "mean: 9.593500599987692 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 48.81829322696271,
            "unit": "iter/sec",
            "range": "stddev: 0.0014864542588737854",
            "extra": "mean: 20.48412457500035 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 84.62112164167148,
            "unit": "iter/sec",
            "range": "stddev: 0.0011623523414275385",
            "extra": "mean: 11.817380585363836 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60239.087162497046,
            "unit": "iter/sec",
            "range": "stddev: 0.000010566113935514782",
            "extra": "mean: 16.60051715761338 usec\nrounds: 11948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 202.39100640617048,
            "unit": "iter/sec",
            "range": "stddev: 0.0007229476406893166",
            "extra": "mean: 4.9409310114953415 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4453535.034061511,
            "unit": "iter/sec",
            "range": "stddev: 3.1875349479342777e-7",
            "extra": "mean: 224.54072828692824 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1468877.0927278395,
            "unit": "iter/sec",
            "range": "stddev: 0.000001742922912690757",
            "extra": "mean: 680.7921540548423 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 82.3191516581406,
            "unit": "iter/sec",
            "range": "stddev: 0.0015897666997533397",
            "extra": "mean: 12.147841417910303 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.48108107256256716,
            "unit": "iter/sec",
            "range": "stddev: 0.09394582142245116",
            "extra": "mean: 2.078651722199993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 83.45763677109632,
            "unit": "iter/sec",
            "range": "stddev: 0.0015061518708315352",
            "extra": "mean: 11.982126965118278 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 84.92650652979673,
            "unit": "iter/sec",
            "range": "stddev: 0.0009230315242244798",
            "extra": "mean: 11.774886791665532 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3268.7509970608744,
            "unit": "iter/sec",
            "range": "stddev: 0.00025256314474975784",
            "extra": "mean: 305.9272489397812 usec\nrounds: 2121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 142.70078357002882,
            "unit": "iter/sec",
            "range": "stddev: 0.000435226716485905",
            "extra": "mean: 7.007669999998711 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 55.822990731094606,
            "unit": "iter/sec",
            "range": "stddev: 0.026572882415248977",
            "extra": "mean: 17.91376611864291 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 213.11734589563997,
            "unit": "iter/sec",
            "range": "stddev: 0.0007557296538414183",
            "extra": "mean: 4.692250627453307 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5145711696487447,
            "unit": "iter/sec",
            "range": "stddev: 0.030065999916440277",
            "extra": "mean: 1.943365775199993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 561.4167407015202,
            "unit": "iter/sec",
            "range": "stddev: 0.0006407845638833009",
            "extra": "mean: 1.781208018041013 msec\nrounds: 388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1329.5051872394947,
            "unit": "iter/sec",
            "range": "stddev: 0.00037482654075951755",
            "extra": "mean: 752.1595324320174 usec\nrounds: 1480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 220.38572919915805,
            "unit": "iter/sec",
            "range": "stddev: 0.0005040290416426149",
            "extra": "mean: 4.537498882680922 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9692.169635177976,
            "unit": "iter/sec",
            "range": "stddev: 0.00005420592678103912",
            "extra": "mean: 103.1760728135086 usec\nrounds: 7018"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3639.907912686793,
            "unit": "iter/sec",
            "range": "stddev: 0.00019635815905298128",
            "extra": "mean: 274.73222509682984 usec\nrounds: 2048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 77.9518018799594,
            "unit": "iter/sec",
            "range": "stddev: 0.001462590884662928",
            "extra": "mean: 12.828439829266982 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3867.960628910499,
            "unit": "iter/sec",
            "range": "stddev: 0.00016328915248612017",
            "extra": "mean: 258.53417238160284 usec\nrounds: 3237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4201124.8729057275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010123554076476032",
            "extra": "mean: 238.03148686400516 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 402.3118627687285,
            "unit": "iter/sec",
            "range": "stddev: 0.0005626712152698248",
            "extra": "mean: 2.4856338888889695 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3935.85927934032,
            "unit": "iter/sec",
            "range": "stddev: 0.00011613624650259091",
            "extra": "mean: 254.0741243593464 usec\nrounds: 2340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 115.79680593801714,
            "unit": "iter/sec",
            "range": "stddev: 0.001901922240828436",
            "extra": "mean: 8.635816781814107 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 92.10350591996203,
            "unit": "iter/sec",
            "range": "stddev: 0.0014262835699148694",
            "extra": "mean: 10.857349999998915 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.316283393415155,
            "unit": "iter/sec",
            "range": "stddev: 0.0037442446101617834",
            "extra": "mean: 24.803873666671606 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 249.92502069113993,
            "unit": "iter/sec",
            "range": "stddev: 0.0010564778282436617",
            "extra": "mean: 4.0012000288510965 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1969735077379544,
            "unit": "iter/sec",
            "range": "stddev: 0.017963525267509564",
            "extra": "mean: 835.440378200019 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 117030.80018241619,
            "unit": "iter/sec",
            "range": "stddev: 0.000026851409660190723",
            "extra": "mean: 8.544759144099654 usec\nrounds: 35843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.819689458643563,
            "unit": "iter/sec",
            "range": "stddev: 0.007170134357977774",
            "extra": "mean: 53.13583957894252 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 82.24133513978164,
            "unit": "iter/sec",
            "range": "stddev: 0.001660879113089638",
            "extra": "mean: 12.159335671050917 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 138.63852143861914,
            "unit": "iter/sec",
            "range": "stddev: 0.0036857203839148873",
            "extra": "mean: 7.213002487499409 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 68.58855871236254,
            "unit": "iter/sec",
            "range": "stddev: 0.003697282406541363",
            "extra": "mean: 14.579691114281395 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 28.193279020573055,
            "unit": "iter/sec",
            "range": "stddev: 0.007958449376427937",
            "extra": "mean: 35.46944643332495 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 54.95313232447332,
            "unit": "iter/sec",
            "range": "stddev: 0.00156938084047318",
            "extra": "mean: 18.197324842111886 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 486.8834511170725,
            "unit": "iter/sec",
            "range": "stddev: 0.0006438874260484838",
            "extra": "mean: 2.053879625001974 msec\nrounds: 408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 118.95842787583217,
            "unit": "iter/sec",
            "range": "stddev: 0.001254633353340246",
            "extra": "mean: 8.406298047615355 msec\nrounds: 126"
          }
        ]
      }
    ]
  }
}