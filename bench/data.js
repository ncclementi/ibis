window.BENCHMARK_DATA = {
  "lastUpdate": 1675862427781,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "09a045c4216e86eee6d57e40e45edbe42b894890",
          "message": "fix(clickhouse): register in-memory tables in pyarrow-related calls",
          "timestamp": "2023-02-08T08:15:02-05:00",
          "tree_id": "fcec4f229cbea1ca140334fdae145d2a81e19c1e",
          "url": "https://github.com/ibis-project/ibis/commit/09a045c4216e86eee6d57e40e45edbe42b894890"
        },
        "date": 1675862355023,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.61913792266948,
            "unit": "iter/sec",
            "range": "stddev: 0.011689415398967052",
            "extra": "mean: 28.885756838710154 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8506283366020884,
            "unit": "iter/sec",
            "range": "stddev: 0.0061285778984787416",
            "extra": "mean: 1.1756015606000034 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1516080.0797843866,
            "unit": "iter/sec",
            "range": "stddev: 9.641539842291443e-8",
            "extra": "mean: 659.5957649824261 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 145.82177818600917,
            "unit": "iter/sec",
            "range": "stddev: 0.00601241478399856",
            "extra": "mean: 6.8576862279405715 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7412596762142356,
            "unit": "iter/sec",
            "range": "stddev: 0.007067672310523473",
            "extra": "mean: 1.3490549022000011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2339598024722425,
            "unit": "iter/sec",
            "range": "stddev: 0.003307541447586",
            "extra": "mean: 447.63562839999906 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2466357.962859196,
            "unit": "iter/sec",
            "range": "stddev: 1.6118898534071532e-8",
            "extra": "mean: 405.4561483206649 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 66.14689918219317,
            "unit": "iter/sec",
            "range": "stddev: 0.0000651303599434715",
            "extra": "mean: 15.117866632653904 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 261.80743177473744,
            "unit": "iter/sec",
            "range": "stddev: 0.00011565410486752207",
            "extra": "mean: 3.819601274193061 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.78204928799731,
            "unit": "iter/sec",
            "range": "stddev: 0.0005895850903510376",
            "extra": "mean: 10.550520984848916 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13602028848589767,
            "unit": "iter/sec",
            "range": "stddev: 0.0832986158206081",
            "extra": "mean: 7.351844428000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.76084022486963,
            "unit": "iter/sec",
            "range": "stddev: 0.00017157360984708253",
            "extra": "mean: 11.266229538460511 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58098.03487689084,
            "unit": "iter/sec",
            "range": "stddev: 6.56004498723913e-7",
            "extra": "mean: 17.21228613186298 usec\nrounds: 12316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4143.6089815536,
            "unit": "iter/sec",
            "range": "stddev: 0.000023050998512820788",
            "extra": "mean: 241.3355131847072 usec\nrounds: 1972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5462.95410058316,
            "unit": "iter/sec",
            "range": "stddev: 0.00004749817129705722",
            "extra": "mean: 183.05114441529938 usec\nrounds: 2292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.923305205001927,
            "unit": "iter/sec",
            "range": "stddev: 0.0008835678802330754",
            "extra": "mean: 38.575327956523424 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1531539.2870573916,
            "unit": "iter/sec",
            "range": "stddev: 9.247345085093747e-8",
            "extra": "mean: 652.9378700570851 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 89.25696048691283,
            "unit": "iter/sec",
            "range": "stddev: 0.00006254664580660155",
            "extra": "mean: 11.20360803846355 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 277.59232121586626,
            "unit": "iter/sec",
            "range": "stddev: 0.000019224588820021117",
            "extra": "mean: 3.6024051228072778 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 388.71442529665796,
            "unit": "iter/sec",
            "range": "stddev: 0.0001321410631237005",
            "extra": "mean: 2.5725826851854623 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 247.84949336866143,
            "unit": "iter/sec",
            "range": "stddev: 0.00017996819053795246",
            "extra": "mean: 4.034706653656779 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5235.5205657832375,
            "unit": "iter/sec",
            "range": "stddev: 0.000057636778319961834",
            "extra": "mean: 191.0029742859771 usec\nrounds: 700"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 66.91717922087592,
            "unit": "iter/sec",
            "range": "stddev: 0.016612259432841645",
            "extra": "mean: 14.943845685713443 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5422426.719560569,
            "unit": "iter/sec",
            "range": "stddev: 4.95992145332127e-9",
            "extra": "mean: 184.41927419557894 nsec\nrounds: 54946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.711659217598736,
            "unit": "iter/sec",
            "range": "stddev: 0.0002980062548420967",
            "extra": "mean: 17.633058418606108 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 235.7654722899874,
            "unit": "iter/sec",
            "range": "stddev: 0.00023536167030255398",
            "extra": "mean: 4.241503178082063 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5502.459177432085,
            "unit": "iter/sec",
            "range": "stddev: 0.00004765071515620778",
            "extra": "mean: 181.7369230291473 usec\nrounds: 3235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.54816719018577,
            "unit": "iter/sec",
            "range": "stddev: 0.0004854679218660707",
            "extra": "mean: 73.81072184615462 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.102279956924573,
            "unit": "iter/sec",
            "range": "stddev: 0.0003004137090817573",
            "extra": "mean: 109.86258439999403 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4538914.8742687935,
            "unit": "iter/sec",
            "range": "stddev: 1.0706440187130381e-8",
            "extra": "mean: 220.31697612757455 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4570.039662552511,
            "unit": "iter/sec",
            "range": "stddev: 0.000075128942026842",
            "extra": "mean: 218.81648165860085 usec\nrounds: 1881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.47480272048354,
            "unit": "iter/sec",
            "range": "stddev: 0.0004051597982124745",
            "extra": "mean: 24.706729441176964 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10597861.146288443,
            "unit": "iter/sec",
            "range": "stddev: 4.260484822523221e-9",
            "extra": "mean: 94.35866220520417 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 155.23383826095392,
            "unit": "iter/sec",
            "range": "stddev: 0.0006806276630833138",
            "extra": "mean: 6.4418944426212175 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.1318143543524,
            "unit": "iter/sec",
            "range": "stddev: 0.0005583144897569157",
            "extra": "mean: 10.511730558140549 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19405.00695936075,
            "unit": "iter/sec",
            "range": "stddev: 0.000012557098601872219",
            "extra": "mean: 51.53309154149061 usec\nrounds: 5320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 617.2555459975016,
            "unit": "iter/sec",
            "range": "stddev: 0.00003191950789777554",
            "extra": "mean: 1.6200745485145427 msec\nrounds: 505"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4717.299120255035,
            "unit": "iter/sec",
            "range": "stddev: 0.000048151971512689713",
            "extra": "mean: 211.98570930264356 usec\nrounds: 344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.19043254663507,
            "unit": "iter/sec",
            "range": "stddev: 0.00029207018086820053",
            "extra": "mean: 8.251476448977867 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.55249620470386,
            "unit": "iter/sec",
            "range": "stddev: 0.00033462822560584716",
            "extra": "mean: 4.534067930348241 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5489.072832571337,
            "unit": "iter/sec",
            "range": "stddev: 0.00005518966625967819",
            "extra": "mean: 182.18012959604934 usec\nrounds: 3318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 157.26962493062763,
            "unit": "iter/sec",
            "range": "stddev: 0.000667956698016605",
            "extra": "mean: 6.358506930000658 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 79.40521826007843,
            "unit": "iter/sec",
            "range": "stddev: 0.0154577438686591",
            "extra": "mean: 12.593630770268376 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 251.60427118987639,
            "unit": "iter/sec",
            "range": "stddev: 0.0002477908058853808",
            "extra": "mean: 3.9744953266128666 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.29966612461702,
            "unit": "iter/sec",
            "range": "stddev: 0.000596627754974909",
            "extra": "mean: 11.1982501547599 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 158.63002053965582,
            "unit": "iter/sec",
            "range": "stddev: 0.000607005702745621",
            "extra": "mean: 6.303976993749494 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 137.99503347413034,
            "unit": "iter/sec",
            "range": "stddev: 0.00012768992089156976",
            "extra": "mean: 7.246637613138939 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 268.107548267694,
            "unit": "iter/sec",
            "range": "stddev: 0.00008177419700443846",
            "extra": "mean: 3.7298464980237793 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 139.82959407730752,
            "unit": "iter/sec",
            "range": "stddev: 0.0006654191486032057",
            "extra": "mean: 7.151561917909384 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 213.97678747757254,
            "unit": "iter/sec",
            "range": "stddev: 0.010229622313716193",
            "extra": "mean: 4.673404119149198 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.8399164160244,
            "unit": "iter/sec",
            "range": "stddev: 0.00019269370421234492",
            "extra": "mean: 10.220777333332006 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 960.8210951790148,
            "unit": "iter/sec",
            "range": "stddev: 0.000011098827294410418",
            "extra": "mean: 1.0407764827578911 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.26490444794425,
            "unit": "iter/sec",
            "range": "stddev: 0.0006880027592522901",
            "extra": "mean: 10.957114413792882 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 144.74917294160957,
            "unit": "iter/sec",
            "range": "stddev: 0.0006943877816671613",
            "extra": "mean: 6.908502340136965 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.33034849428404,
            "unit": "iter/sec",
            "range": "stddev: 0.00030624982339273895",
            "extra": "mean: 9.868711741935924 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9764.633013735587,
            "unit": "iter/sec",
            "range": "stddev: 0.000014030312584020333",
            "extra": "mean: 102.41040278660068 usec\nrounds: 6028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1427.0140574223965,
            "unit": "iter/sec",
            "range": "stddev: 0.00003050139999090639",
            "extra": "mean: 700.7639446848139 usec\nrounds: 1157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10302.291071813266,
            "unit": "iter/sec",
            "range": "stddev: 0.000005172881835401652",
            "extra": "mean: 97.06578789410906 usec\nrounds: 5865"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 244.75031457597643,
            "unit": "iter/sec",
            "range": "stddev: 0.0002364886905347821",
            "extra": "mean: 4.085796587156483 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.42302967546102,
            "unit": "iter/sec",
            "range": "stddev: 0.00011144088806154283",
            "extra": "mean: 14.83172745000445 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 384442.72419049277,
            "unit": "iter/sec",
            "range": "stddev: 5.657746841320397e-7",
            "extra": "mean: 2.6011677086766674 usec\nrounds: 1598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.838465457985705,
            "unit": "iter/sec",
            "range": "stddev: 0.004353837162910693",
            "extra": "mean: 1.1926549752000029 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 597308.151253054,
            "unit": "iter/sec",
            "range": "stddev: 1.607047442417484e-7",
            "extra": "mean: 1.6741777220052412 usec\nrounds: 22372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.99004922213321,
            "unit": "iter/sec",
            "range": "stddev: 0.0006521923219498362",
            "extra": "mean: 28.579553965515508 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10782.659649977828,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026683161638649174",
            "extra": "mean: 92.74149722439363 usec\nrounds: 4684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 513.168381485429,
            "unit": "iter/sec",
            "range": "stddev: 0.0000576509050640709",
            "extra": "mean: 1.9486781260867572 msec\nrounds: 460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.21295610371754,
            "unit": "iter/sec",
            "range": "stddev: 0.000044457676032166375",
            "extra": "mean: 6.569742981133633 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 250.38787429121686,
            "unit": "iter/sec",
            "range": "stddev: 0.0001851955343022799",
            "extra": "mean: 3.9938036249987774 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 132.8453886127989,
            "unit": "iter/sec",
            "range": "stddev: 0.00036838737115364365",
            "extra": "mean: 7.527547703704453 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 154.0613166941624,
            "unit": "iter/sec",
            "range": "stddev: 0.0007216444739469723",
            "extra": "mean: 6.490922065693934 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.919085737347642,
            "unit": "iter/sec",
            "range": "stddev: 0.00025655101777105556",
            "extra": "mean: 203.28980899999465 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.83073860454424,
            "unit": "iter/sec",
            "range": "stddev: 0.0006892308229619661",
            "extra": "mean: 22.81503875675787 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.58101741923684,
            "unit": "iter/sec",
            "range": "stddev: 0.0002822273608485198",
            "extra": "mean: 5.862317010000595 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.26967317966961,
            "unit": "iter/sec",
            "range": "stddev: 0.0003902446962116814",
            "extra": "mean: 15.321051129630645 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1517806.3928869944,
            "unit": "iter/sec",
            "range": "stddev: 9.51845835205839e-8",
            "extra": "mean: 658.8455580938203 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5687724916873298,
            "unit": "iter/sec",
            "range": "stddev: 0.0005925520564443193",
            "extra": "mean: 637.4410599999919 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 238.58099142831074,
            "unit": "iter/sec",
            "range": "stddev: 0.00026502745486204986",
            "extra": "mean: 4.191448757142423 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4657.845285780774,
            "unit": "iter/sec",
            "range": "stddev: 0.00005154296629945268",
            "extra": "mean: 214.69154483356232 usec\nrounds: 2342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 123183.52705870791,
            "unit": "iter/sec",
            "range": "stddev: 3.6556963987302137e-7",
            "extra": "mean: 8.117968561846837 usec\nrounds: 35212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5866268755122799,
            "unit": "iter/sec",
            "range": "stddev: 0.0013064980625940128",
            "extra": "mean: 1.7046610745999942 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4192484.8482235554,
            "unit": "iter/sec",
            "range": "stddev: 1.2759772361758337e-8",
            "extra": "mean: 238.52203077678257 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 75.84107906788671,
            "unit": "iter/sec",
            "range": "stddev: 0.015534859843418833",
            "extra": "mean: 13.185466402777339 msec\nrounds: 72"
          }
        ]
      }
    ]
  }
}