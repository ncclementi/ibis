window.BENCHMARK_DATA = {
  "lastUpdate": 1676586825916,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "07d2a863b86f415eea7aba2c3e889876be8ce3dc",
          "message": "fix(duckdb): add `null` to duckdb datatype parser",
          "timestamp": "2023-02-16T16:28:51-06:00",
          "tree_id": "29f83ebb2c15f76f2994afe8f8cf8eaa2413e223",
          "url": "https://github.com/ibis-project/ibis/commit/07d2a863b86f415eea7aba2c3e889876be8ce3dc"
        },
        "date": 1676586740694,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 233.98263514585332,
            "unit": "iter/sec",
            "range": "stddev: 0.003541959862077978",
            "extra": "mean: 4.2738214285716065 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8736303822832242,
            "unit": "iter/sec",
            "range": "stddev: 0.0033387857374489642",
            "extra": "mean: 1.1446488357999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.43041892496129,
            "unit": "iter/sec",
            "range": "stddev: 0.00012199554683721176",
            "extra": "mean: 8.235168822220373 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.1189277256025,
            "unit": "iter/sec",
            "range": "stddev: 0.0005744556858148158",
            "extra": "mean: 10.5131546781602 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.06259666795809,
            "unit": "iter/sec",
            "range": "stddev: 0.008066644029436154",
            "extra": "mean: 12.336145659090064 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.59389583047644,
            "unit": "iter/sec",
            "range": "stddev: 0.00005987519838555661",
            "extra": "mean: 13.775262899999632 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10158.380085026205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018186422088550298",
            "extra": "mean: 98.44089231057949 usec\nrounds: 5228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 250.22925934629862,
            "unit": "iter/sec",
            "range": "stddev: 0.00019189056125930805",
            "extra": "mean: 3.9963352112075534 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5392463.9505910445,
            "unit": "iter/sec",
            "range": "stddev: 4.770438628576147e-9",
            "extra": "mean: 185.44398426439375 nsec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7509398473266339,
            "unit": "iter/sec",
            "range": "stddev: 0.0018246834974567578",
            "extra": "mean: 1.3316645848000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 223.58803151215466,
            "unit": "iter/sec",
            "range": "stddev: 0.0003340746214334944",
            "extra": "mean: 4.472511311257902 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1585457.0493579286,
            "unit": "iter/sec",
            "range": "stddev: 8.389977255545579e-8",
            "extra": "mean: 630.7329488395637 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9681.628199302739,
            "unit": "iter/sec",
            "range": "stddev: 0.00001259031166064887",
            "extra": "mean: 103.28841176446117 usec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 84.20566922276765,
            "unit": "iter/sec",
            "range": "stddev: 0.0004983345160526755",
            "extra": "mean: 11.875684965515584 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 73.44012555751263,
            "unit": "iter/sec",
            "range": "stddev: 0.013983689225979402",
            "extra": "mean: 13.616534454545251 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.25614549538544,
            "unit": "iter/sec",
            "range": "stddev: 0.00008632534665602994",
            "extra": "mean: 14.650695446428433 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2009402.7726933958,
            "unit": "iter/sec",
            "range": "stddev: 2.5739050780170703e-8",
            "extra": "mean: 497.6603066292442 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 254.09152267434027,
            "unit": "iter/sec",
            "range": "stddev: 0.0002166172726350771",
            "extra": "mean: 3.935589780701433 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.93580180323555,
            "unit": "iter/sec",
            "range": "stddev: 0.00008929145882634848",
            "extra": "mean: 17.563641300001365 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5986.950166245517,
            "unit": "iter/sec",
            "range": "stddev: 0.00004971737271179227",
            "extra": "mean: 167.02995218467154 usec\nrounds: 2426"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.55234555904526,
            "unit": "iter/sec",
            "range": "stddev: 0.0001088789116711225",
            "extra": "mean: 11.292755642855516 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.60604188544742,
            "unit": "iter/sec",
            "range": "stddev: 0.00015976652450954912",
            "extra": "mean: 22.932601923077282 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 412.8117047957795,
            "unit": "iter/sec",
            "range": "stddev: 0.000030054826467592277",
            "extra": "mean: 2.422411933534457 msec\nrounds: 331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5171.8009590068295,
            "unit": "iter/sec",
            "range": "stddev: 0.00005016533031484165",
            "extra": "mean: 193.35624242430933 usec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 274.5142432010639,
            "unit": "iter/sec",
            "range": "stddev: 0.0000441074534550773",
            "extra": "mean: 3.642798232758964 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 138.97169301290458,
            "unit": "iter/sec",
            "range": "stddev: 0.0005775394914647095",
            "extra": "mean: 7.1957099918696565 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5743.201414809399,
            "unit": "iter/sec",
            "range": "stddev: 0.000058191508637578723",
            "extra": "mean: 174.11891517880665 usec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.33137950007742,
            "unit": "iter/sec",
            "range": "stddev: 0.00007530811028477777",
            "extra": "mean: 5.836642434782639 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 267.3811961467163,
            "unit": "iter/sec",
            "range": "stddev: 0.000015458385668977538",
            "extra": "mean: 3.7399787808985794 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15450964004299725,
            "unit": "iter/sec",
            "range": "stddev: 0.09924549591394599",
            "extra": "mean: 6.472088082799999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.86006112589421,
            "unit": "iter/sec",
            "range": "stddev: 0.0008393713132170288",
            "extra": "mean: 28.686122964288074 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 160.9149947168004,
            "unit": "iter/sec",
            "range": "stddev: 0.000649686948647251",
            "extra": "mean: 6.214461254900035 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5818659327750236,
            "unit": "iter/sec",
            "range": "stddev: 0.04231831788692367",
            "extra": "mean: 1.7186089503999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 241.8030016751613,
            "unit": "iter/sec",
            "range": "stddev: 0.00018644269202347698",
            "extra": "mean: 4.13559795814033 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 148.79423658067307,
            "unit": "iter/sec",
            "range": "stddev: 0.007537040872430058",
            "extra": "mean: 6.720690417722069 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1455.200478077019,
            "unit": "iter/sec",
            "range": "stddev: 0.000006999136863535806",
            "extra": "mean: 687.1905383933452 usec\nrounds: 1120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 96.89684369763896,
            "unit": "iter/sec",
            "range": "stddev: 0.00015179121644271406",
            "extra": "mean: 10.3202536000083 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 986.2351467566992,
            "unit": "iter/sec",
            "range": "stddev: 0.000013139515757184217",
            "extra": "mean: 1.0139569688715389 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 617.8606955688559,
            "unit": "iter/sec",
            "range": "stddev: 0.00001752183507717345",
            "extra": "mean: 1.6184878034349048 msec\nrounds: 524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.232134623711481,
            "unit": "iter/sec",
            "range": "stddev: 0.00022988050315712465",
            "extra": "mean: 108.31731129999298 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 249.49590243963308,
            "unit": "iter/sec",
            "range": "stddev: 0.000167832458665121",
            "extra": "mean: 4.008081857143749 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19111.90811399744,
            "unit": "iter/sec",
            "range": "stddev: 0.000014130673054468148",
            "extra": "mean: 52.32339931917139 usec\nrounds: 9108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6101.7301505934865,
            "unit": "iter/sec",
            "range": "stddev: 0.00004612988484565377",
            "extra": "mean: 163.88794248836695 usec\nrounds: 2556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5303.092594646295,
            "unit": "iter/sec",
            "range": "stddev: 0.00004628091554151237",
            "extra": "mean: 188.5692135584327 usec\nrounds: 3142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.58588290097366,
            "unit": "iter/sec",
            "range": "stddev: 0.000572113839945879",
            "extra": "mean: 11.039247705883447 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.59709343090147,
            "unit": "iter/sec",
            "range": "stddev: 0.0005747187388451493",
            "extra": "mean: 10.460569083335258 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.572601966364953,
            "unit": "iter/sec",
            "range": "stddev: 0.0007204226772386",
            "extra": "mean: 37.632746739133005 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.82913350601308,
            "unit": "iter/sec",
            "range": "stddev: 0.000023917214059498105",
            "extra": "mean: 6.857340340424955 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.78420409666813,
            "unit": "iter/sec",
            "range": "stddev: 0.0006019300372064406",
            "extra": "mean: 6.906830798560937 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.158434167848824,
            "unit": "iter/sec",
            "range": "stddev: 0.023172736244891027",
            "extra": "mean: 30.158239527776704 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 93.51630654904828,
            "unit": "iter/sec",
            "range": "stddev: 0.0006063635882541733",
            "extra": "mean: 10.69332223333169 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 332.7410400849239,
            "unit": "iter/sec",
            "range": "stddev: 0.00002945336918646422",
            "extra": "mean: 3.0053401280009666 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10924.981526268484,
            "unit": "iter/sec",
            "range": "stddev: 0.00000229015267572035",
            "extra": "mean: 91.5333355571868 usec\nrounds: 6294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 160.51637492537293,
            "unit": "iter/sec",
            "range": "stddev: 0.000612730973478757",
            "extra": "mean: 6.229893993462777 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 149.47147263462654,
            "unit": "iter/sec",
            "range": "stddev: 0.0006132470990534304",
            "extra": "mean: 6.690239832214914 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5175.347248870948,
            "unit": "iter/sec",
            "range": "stddev: 0.00005672345608127865",
            "extra": "mean: 193.2237494243811 usec\nrounds: 3041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 564971.0699230904,
            "unit": "iter/sec",
            "range": "stddev: 9.125955487299042e-7",
            "extra": "mean: 1.7700021350405255 usec\nrounds: 23420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.5214647743296,
            "unit": "iter/sec",
            "range": "stddev: 0.00014324103274541148",
            "extra": "mean: 73.95648449999977 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.46993103224925,
            "unit": "iter/sec",
            "range": "stddev: 0.00044803614576716414",
            "extra": "mean: 21.51929167499773 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 390769.97193899506,
            "unit": "iter/sec",
            "range": "stddev: 3.634074227456593e-7",
            "extra": "mean: 2.5590502643742408 usec\nrounds: 1890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11933087.120486816,
            "unit": "iter/sec",
            "range": "stddev: 3.1272367914667e-9",
            "extra": "mean: 83.80061168597192 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 238.5295237001845,
            "unit": "iter/sec",
            "range": "stddev: 0.00035991792517547813",
            "extra": "mean: 4.192353149780035 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.65515546795625,
            "unit": "iter/sec",
            "range": "stddev: 0.00013003379050848538",
            "extra": "mean: 9.647373500000567 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.8833695010382,
            "unit": "iter/sec",
            "range": "stddev: 0.00009898771966289172",
            "extra": "mean: 6.950073545454358 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5964.811856382451,
            "unit": "iter/sec",
            "range": "stddev: 0.000049310302885407985",
            "extra": "mean: 167.64988135040383 usec\nrounds: 2933"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57679.26787699977,
            "unit": "iter/sec",
            "range": "stddev: 4.638679054932115e-7",
            "extra": "mean: 17.337251959100556 usec\nrounds: 12887"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 159.97853593240217,
            "unit": "iter/sec",
            "range": "stddev: 0.000614859963668915",
            "extra": "mean: 6.250838552632731 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4429643.309553132,
            "unit": "iter/sec",
            "range": "stddev: 1.1273235667221943e-8",
            "extra": "mean: 225.7518111777266 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4696200.388889286,
            "unit": "iter/sec",
            "range": "stddev: 1.1048823260468304e-8",
            "extra": "mean: 212.93810254901973 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2408852588173294,
            "unit": "iter/sec",
            "range": "stddev: 0.0009771713467308164",
            "extra": "mean: 446.2522103999959 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4469.913268630667,
            "unit": "iter/sec",
            "range": "stddev: 0.00010439636369667402",
            "extra": "mean: 223.71798733051133 usec\nrounds: 2131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 162.08171554784937,
            "unit": "iter/sec",
            "range": "stddev: 0.0006247220024583148",
            "extra": "mean: 6.169727391025686 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.867773086527248,
            "unit": "iter/sec",
            "range": "stddev: 0.004656172718911694",
            "extra": "mean: 1.1523749877999934 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 510.99529346501356,
            "unit": "iter/sec",
            "range": "stddev: 0.00008400910775887306",
            "extra": "mean: 1.956965186937612 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.12561742939577,
            "unit": "iter/sec",
            "range": "stddev: 0.00010034553171374136",
            "extra": "mean: 15.122732140349825 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119353.53508387794,
            "unit": "iter/sec",
            "range": "stddev: 3.6914151818592536e-7",
            "extra": "mean: 8.37846989029048 usec\nrounds: 34723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.29714034478593,
            "unit": "iter/sec",
            "range": "stddev: 0.00007437186234635796",
            "extra": "mean: 10.493494310343321 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5801056097840886,
            "unit": "iter/sec",
            "range": "stddev: 0.0015246625768098974",
            "extra": "mean: 632.8690904000041 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1417502.7603359043,
            "unit": "iter/sec",
            "range": "stddev: 1.0001235997862661e-7",
            "extra": "mean: 705.4659983611114 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 250.19564031919242,
            "unit": "iter/sec",
            "range": "stddev: 0.0002644372989230704",
            "extra": "mean: 3.9968722025860592 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2026570.959563995,
            "unit": "iter/sec",
            "range": "stddev: 2.5917514510260014e-8",
            "extra": "mean: 493.4443549980756 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.862326322614521,
            "unit": "iter/sec",
            "range": "stddev: 0.0005813963010990321",
            "extra": "mean: 205.6628728000078 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}