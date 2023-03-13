window.BENCHMARK_DATA = {
  "lastUpdate": 1678718560353,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "c4254f64a1c74f3d8751f684c22e4db88e9d0366",
          "message": "fix(cache): remove bogus schema argument and validate database argument type",
          "timestamp": "2023-03-13T15:32:11+01:00",
          "tree_id": "36461a49401f519ab9230ce27a7053230a17b350",
          "url": "https://github.com/ibis-project/ibis/commit/c4254f64a1c74f3d8751f684c22e4db88e9d0366"
        },
        "date": 1678718149812,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.503613468204687,
            "unit": "iter/sec",
            "range": "stddev: 0.0004043130823774621",
            "extra": "mean: 37.73070420000124 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2542286.9794770163,
            "unit": "iter/sec",
            "range": "stddev: 1.9741748464902985e-8",
            "extra": "mean: 393.34662375760917 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 115.17438711854523,
            "unit": "iter/sec",
            "range": "stddev: 0.0005050354135351779",
            "extra": "mean: 8.682485967741531 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9324944934642904,
            "unit": "iter/sec",
            "range": "stddev: 0.004913031974748051",
            "extra": "mean: 1.0723923915999989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.80723255672933,
            "unit": "iter/sec",
            "range": "stddev: 0.00023478806616223928",
            "extra": "mean: 3.5111467887347803 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.05501692021512,
            "unit": "iter/sec",
            "range": "stddev: 0.00026457921447022037",
            "extra": "mean: 20.8094818000019 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.1296419081289,
            "unit": "iter/sec",
            "range": "stddev: 0.00007895222435375859",
            "extra": "mean: 10.190600725275464 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5832.765199572256,
            "unit": "iter/sec",
            "range": "stddev: 0.000045118250071775866",
            "extra": "mean: 171.4452692306789 usec\nrounds: 2470"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.12702249500234,
            "unit": "iter/sec",
            "range": "stddev: 0.009513321560324963",
            "extra": "mean: 11.095451423078483 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1682380.2503201424,
            "unit": "iter/sec",
            "range": "stddev: 7.372673657651491e-8",
            "extra": "mean: 594.3959457499033 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.66472835282909,
            "unit": "iter/sec",
            "range": "stddev: 0.00017478135741189304",
            "extra": "mean: 9.463896000005434 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.520117439031761,
            "unit": "iter/sec",
            "range": "stddev: 0.00007947100958586102",
            "extra": "mean: 64.43250213333347 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.8426400538056,
            "unit": "iter/sec",
            "range": "stddev: 0.00034710768903331444",
            "extra": "mean: 7.361458814433466 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.94306232183591,
            "unit": "iter/sec",
            "range": "stddev: 0.00033821438038064233",
            "extra": "mean: 14.938067744681193 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.703943184227,
            "unit": "iter/sec",
            "range": "stddev: 0.00002796298199659074",
            "extra": "mean: 1.4541140994041282 msec\nrounds: 503"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.53918776357808,
            "unit": "iter/sec",
            "range": "stddev: 0.0007086643265049259",
            "extra": "mean: 26.638828903225157 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.4205181489086,
            "unit": "iter/sec",
            "range": "stddev: 0.00008511594121389854",
            "extra": "mean: 9.056287878050354 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 106.73458643967483,
            "unit": "iter/sec",
            "range": "stddev: 0.009461703024179792",
            "extra": "mean: 9.369034287355285 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 348.5115290852325,
            "unit": "iter/sec",
            "range": "stddev: 0.00004178592550749809",
            "extra": "mean: 2.869345535353691 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.36553263210652,
            "unit": "iter/sec",
            "range": "stddev: 0.0006154815310205363",
            "extra": "mean: 9.401541789470146 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5300.331952213271,
            "unit": "iter/sec",
            "range": "stddev: 0.00004662153786875547",
            "extra": "mean: 188.6674285716063 usec\nrounds: 2450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.80110985218148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005871042187514417",
            "extra": "mean: 8.278069640449926 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6267111.08038686,
            "unit": "iter/sec",
            "range": "stddev: 1.0236623453978913e-8",
            "extra": "mean: 159.56315233135453 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 294.94776692327633,
            "unit": "iter/sec",
            "range": "stddev: 0.000040311953758233504",
            "extra": "mean: 3.390430822485685 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.9051837535601,
            "unit": "iter/sec",
            "range": "stddev: 0.00022132200264155397",
            "extra": "mean: 3.2164146892856342 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.17223878680693,
            "unit": "iter/sec",
            "range": "stddev: 0.0007178847036580843",
            "extra": "mean: 8.391216026317581 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.35029872295668,
            "unit": "iter/sec",
            "range": "stddev: 0.0007027148015500058",
            "extra": "mean: 9.675830765430337 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.3719543528862,
            "unit": "iter/sec",
            "range": "stddev: 0.0007276259606306293",
            "extra": "mean: 9.962942402059992 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.77774920360527,
            "unit": "iter/sec",
            "range": "stddev: 0.0002556310536668345",
            "extra": "mean: 17.612533325581392 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 308.7878592356897,
            "unit": "iter/sec",
            "range": "stddev: 0.00024121441777224034",
            "extra": "mean: 3.2384692923976846 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 242.86383580164517,
            "unit": "iter/sec",
            "range": "stddev: 0.004189968766549972",
            "extra": "mean: 4.117533582961 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.73627058400425,
            "unit": "iter/sec",
            "range": "stddev: 0.0005987823864733459",
            "extra": "mean: 9.829336128203108 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11939.392698504298,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032180203582595558",
            "extra": "mean: 83.75635388266227 usec\nrounds: 5872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.07615343503785,
            "unit": "iter/sec",
            "range": "stddev: 0.00023288257744370107",
            "extra": "mean: 10.517884494383383 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 736889.4085534082,
            "unit": "iter/sec",
            "range": "stddev: 2.650603166316973e-7",
            "extra": "mean: 1.357055737798031 usec\nrounds: 25907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 98.6978631944054,
            "unit": "iter/sec",
            "range": "stddev: 0.014359576439862978",
            "extra": "mean: 10.13193161061955 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.7201708087027,
            "unit": "iter/sec",
            "range": "stddev: 0.000717392858159997",
            "extra": "mean: 8.423168474136796 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1772896998392691,
            "unit": "iter/sec",
            "range": "stddev: 0.05871444878270985",
            "extra": "mean: 5.6404856058 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.90608658875917,
            "unit": "iter/sec",
            "range": "stddev: 0.012068898870149215",
            "extra": "mean: 10.648936999997431 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5767.909468617257,
            "unit": "iter/sec",
            "range": "stddev: 0.00006058918915681726",
            "extra": "mean: 173.37304017008617 usec\nrounds: 3062"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 744.0429592466816,
            "unit": "iter/sec",
            "range": "stddev: 0.00001821757457243857",
            "extra": "mean: 1.3440084172189013 msec\nrounds: 604"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.43122046874266,
            "unit": "iter/sec",
            "range": "stddev: 0.000759846285772467",
            "extra": "mean: 23.0249113243248 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.01492255828276,
            "unit": "iter/sec",
            "range": "stddev: 0.00006181590285597075",
            "extra": "mean: 6.328516217391788 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5396.3574032112165,
            "unit": "iter/sec",
            "range": "stddev: 0.000048448490911777145",
            "extra": "mean: 185.31018709119024 usec\nrounds: 2293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.93675412363717,
            "unit": "iter/sec",
            "range": "stddev: 0.0006594680739540629",
            "extra": "mean: 8.3377277241399 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7818256612095893,
            "unit": "iter/sec",
            "range": "stddev: 0.0012702894670747712",
            "extra": "mean: 561.2221339999962 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 303.2934698549548,
            "unit": "iter/sec",
            "range": "stddev: 0.0002373082989841757",
            "extra": "mean: 3.2971366000007643 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.29031716204624,
            "unit": "iter/sec",
            "range": "stddev: 0.0002115954277289985",
            "extra": "mean: 14.226710596491051 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8009.640233928118,
            "unit": "iter/sec",
            "range": "stddev: 0.00002180918926538655",
            "extra": "mean: 124.8495526383432 usec\nrounds: 3771"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5359.7322640420825,
            "unit": "iter/sec",
            "range": "stddev: 0.000021767138233369006",
            "extra": "mean: 186.5764838122422 usec\nrounds: 1637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9269194536398557,
            "unit": "iter/sec",
            "range": "stddev: 0.0008628771381505202",
            "extra": "mean: 1.0788423913999963 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.576097717923512,
            "unit": "iter/sec",
            "range": "stddev: 0.00227176442291484",
            "extra": "mean: 388.1840324000052 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5559.08309494806,
            "unit": "iter/sec",
            "range": "stddev: 0.00004829330387174421",
            "extra": "mean: 179.8857802483241 usec\nrounds: 2339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1186.082667252274,
            "unit": "iter/sec",
            "range": "stddev: 0.000012063394823426712",
            "extra": "mean: 843.1115533596318 usec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 494054.48377797665,
            "unit": "iter/sec",
            "range": "stddev: 1.1138435475419218e-7",
            "extra": "mean: 2.0240682613648544 usec\nrounds: 2007"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.510779931384308,
            "unit": "iter/sec",
            "range": "stddev: 0.0002600758120085834",
            "extra": "mean: 95.14041836363484 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 314.35600180247604,
            "unit": "iter/sec",
            "range": "stddev: 0.00010598740872625617",
            "extra": "mean: 3.181106752427602 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6822865453876158,
            "unit": "iter/sec",
            "range": "stddev: 0.001596706893545797",
            "extra": "mean: 1.4656598561999885 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.046210265033466,
            "unit": "iter/sec",
            "range": "stddev: 0.021874135164612427",
            "extra": "mean: 32.21005048485012 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.85869962974799,
            "unit": "iter/sec",
            "range": "stddev: 0.0001428726987643795",
            "extra": "mean: 13.358500814815269 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5771.092592764017,
            "unit": "iter/sec",
            "range": "stddev: 0.000045488636488599174",
            "extra": "mean: 173.27741392571528 usec\nrounds: 2341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.5796542423851925,
            "unit": "iter/sec",
            "range": "stddev: 0.00021997946318602467",
            "extra": "mean: 179.22257483333226 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.07561548698828,
            "unit": "iter/sec",
            "range": "stddev: 0.0006503426759965462",
            "extra": "mean: 9.427237309998588 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139273.76427441335,
            "unit": "iter/sec",
            "range": "stddev: 3.4902911081354465e-7",
            "extra": "mean: 7.1801031961029205 usec\nrounds: 40486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.60465808012324,
            "unit": "iter/sec",
            "range": "stddev: 0.00005702653825627005",
            "extra": "mean: 6.552879922413391 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11521.557809197438,
            "unit": "iter/sec",
            "range": "stddev: 0.000025204515105706876",
            "extra": "mean: 86.79381873184884 usec\nrounds: 4794"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 102.17502262946672,
            "unit": "iter/sec",
            "range": "stddev: 0.015738784131552323",
            "extra": "mean: 9.787127756520853 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12809618.016525473,
            "unit": "iter/sec",
            "range": "stddev: 3.934999296351602e-9",
            "extra": "mean: 78.06634036310707 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13628.984521584505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020327187608407627",
            "extra": "mean: 73.37303805843196 usec\nrounds: 6490"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.69434106407437,
            "unit": "iter/sec",
            "range": "stddev: 0.000031564859437601054",
            "extra": "mean: 5.136256115789712 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 175.0048668853378,
            "unit": "iter/sec",
            "range": "stddev: 0.003982731883148376",
            "extra": "mean: 5.714126800000336 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6951907.23314479,
            "unit": "iter/sec",
            "range": "stddev: 9.492299637688385e-9",
            "extra": "mean: 143.84541773403907 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71208.37580849993,
            "unit": "iter/sec",
            "range": "stddev: 5.411633908000428e-7",
            "extra": "mean: 14.04329179883686 usec\nrounds: 12937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.9101652264586,
            "unit": "iter/sec",
            "range": "stddev: 0.00013195064241107272",
            "extra": "mean: 1.8385389057467736 msec\nrounds: 435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1736.0469445061935,
            "unit": "iter/sec",
            "range": "stddev: 0.000010690229711281",
            "extra": "mean: 576.0212897263806 usec\nrounds: 1353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5516.902462214874,
            "unit": "iter/sec",
            "range": "stddev: 0.000046581174407585115",
            "extra": "mean: 181.2611346401309 usec\nrounds: 2347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 303.17497422088167,
            "unit": "iter/sec",
            "range": "stddev: 0.00021383065775603812",
            "extra": "mean: 3.2984252825282288 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.7293376776875,
            "unit": "iter/sec",
            "range": "stddev: 0.0002293991323636053",
            "extra": "mean: 3.187460909465083 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1900058.9533671811,
            "unit": "iter/sec",
            "range": "stddev: 8.654254065511935e-8",
            "extra": "mean: 526.2994594077486 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2435281.5236038556,
            "unit": "iter/sec",
            "range": "stddev: 1.9100493756693582e-8",
            "extra": "mean: 410.630142883806 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 295.83189046896507,
            "unit": "iter/sec",
            "range": "stddev: 0.00035777347956103984",
            "extra": "mean: 3.380298176828598 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8602467317110832,
            "unit": "iter/sec",
            "range": "stddev: 0.0022601639941264547",
            "extra": "mean: 1.1624571918000073 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5625.805057858471,
            "unit": "iter/sec",
            "range": "stddev: 0.00004698068594956749",
            "extra": "mean: 177.7523376148874 usec\nrounds: 2491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5676189.01220164,
            "unit": "iter/sec",
            "range": "stddev: 1.1518207457844925e-8",
            "extra": "mean: 176.17454208278835 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.30966643792361,
            "unit": "iter/sec",
            "range": "stddev: 0.0006716082268400117",
            "extra": "mean: 10.833101652170738 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 258.8773231952788,
            "unit": "iter/sec",
            "range": "stddev: 0.010219138247823617",
            "extra": "mean: 3.8628335137939853 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.27691191058722,
            "unit": "iter/sec",
            "range": "stddev: 0.00006500707211368514",
            "extra": "mean: 6.200515549022946 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.06139365815417,
            "unit": "iter/sec",
            "range": "stddev: 0.00006239950484215904",
            "extra": "mean: 8.399028175927226 msec\nrounds: 108"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "8dcfb8d7cb7b84ffe1f8cd42a09be27b77d7d777",
          "message": "feat(api): upcast pandas DataFrames to memtables in `rlz.table` rule",
          "timestamp": "2023-03-13T15:34:43+01:00",
          "tree_id": "5fa9192ca06130e1ff35a8a62b188d89bb61d8b1",
          "url": "https://github.com/ibis-project/ibis/commit/8dcfb8d7cb7b84ffe1f8cd42a09be27b77d7d777"
        },
        "date": 1678718465320,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.7541992655319,
            "unit": "iter/sec",
            "range": "stddev: 0.0011199904387475298",
            "extra": "mean: 27.968742708329348 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 989.714804573934,
            "unit": "iter/sec",
            "range": "stddev: 0.000029613018252799597",
            "extra": "mean: 1.0103920799997468 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2220.212827845923,
            "unit": "iter/sec",
            "range": "stddev: 0.0040647976590633145",
            "extra": "mean: 450.4072706264885 usec\nrounds: 303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60335.56910295303,
            "unit": "iter/sec",
            "range": "stddev: 0.000001322079152302371",
            "extra": "mean: 16.573971454444383 usec\nrounds: 12121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 78.84591338098328,
            "unit": "iter/sec",
            "range": "stddev: 0.014024841689881771",
            "extra": "mean: 12.68296550980394 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.727150316514446,
            "unit": "iter/sec",
            "range": "stddev: 0.00401406229775505",
            "extra": "mean: 1.3752314718000036 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7583394476827416,
            "unit": "iter/sec",
            "range": "stddev: 0.010535653746805186",
            "extra": "mean: 1.318670686400003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 102.4350375436283,
            "unit": "iter/sec",
            "range": "stddev: 0.0006825355951374014",
            "extra": "mean: 9.762284702381137 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.0723696540875,
            "unit": "iter/sec",
            "range": "stddev: 0.00021843610321535114",
            "extra": "mean: 12.488702461535713 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 574.1441307307488,
            "unit": "iter/sec",
            "range": "stddev: 0.00004583316312963095",
            "extra": "mean: 1.7417229341476297 msec\nrounds: 410"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 91.68754400533639,
            "unit": "iter/sec",
            "range": "stddev: 0.011860811477790922",
            "extra": "mean: 10.906606898989443 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1648236.8370713552,
            "unit": "iter/sec",
            "range": "stddev: 2.509140529259723e-7",
            "extra": "mean: 606.7089252639413 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.47423382485137,
            "unit": "iter/sec",
            "range": "stddev: 0.0002643750506506995",
            "extra": "mean: 74.21572261538446 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 263.64094859225,
            "unit": "iter/sec",
            "range": "stddev: 0.00023313939798493986",
            "extra": "mean: 3.7930374827569406 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11931.3643867039,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032761059266076013",
            "extra": "mean: 83.81271140410246 usec\nrounds: 5305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4431.393577865817,
            "unit": "iter/sec",
            "range": "stddev: 0.000026892228002240852",
            "extra": "mean: 225.66264594389864 usec\nrounds: 1319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.84569760540985,
            "unit": "iter/sec",
            "range": "stddev: 0.0003701848236027829",
            "extra": "mean: 20.472632166671033 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.154611202503,
            "unit": "iter/sec",
            "range": "stddev: 0.00010263279511919968",
            "extra": "mean: 9.789083314287998 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 87.53088939251865,
            "unit": "iter/sec",
            "range": "stddev: 0.014389110594238499",
            "extra": "mean: 11.424538319445787 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7134.527534511901,
            "unit": "iter/sec",
            "range": "stddev: 0.00005900501789313636",
            "extra": "mean: 140.1634509310803 usec\nrounds: 1182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 26.34858916343085,
            "unit": "iter/sec",
            "range": "stddev: 0.028420232471857723",
            "extra": "mean: 37.95269620689589 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.24572539618038,
            "unit": "iter/sec",
            "range": "stddev: 0.00006581231062424624",
            "extra": "mean: 7.339679810813608 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.86285536641385,
            "unit": "iter/sec",
            "range": "stddev: 0.0006808680758202639",
            "extra": "mean: 10.76856829411768 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 88.68906415875261,
            "unit": "iter/sec",
            "range": "stddev: 0.0007436005794322322",
            "extra": "mean: 11.275347298850837 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 238.99980800216514,
            "unit": "iter/sec",
            "range": "stddev: 0.00034201885304562804",
            "extra": "mean: 4.184103779660529 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 634.339088002065,
            "unit": "iter/sec",
            "range": "stddev: 0.00005363740478567399",
            "extra": "mean: 1.5764439223659268 msec\nrounds: 541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 407711.994446847,
            "unit": "iter/sec",
            "range": "stddev: 7.254800179285909e-7",
            "extra": "mean: 2.4527117514821333 usec\nrounds: 1804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 82.69033803537621,
            "unit": "iter/sec",
            "range": "stddev: 0.0006825914066518526",
            "extra": "mean: 12.093311307690923 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 250.81406102869425,
            "unit": "iter/sec",
            "range": "stddev: 0.00010168709916371313",
            "extra": "mean: 3.987017298386614 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.44953139785695,
            "unit": "iter/sec",
            "range": "stddev: 0.00012091796569216547",
            "extra": "mean: 18.709237926828575 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14568028331514565,
            "unit": "iter/sec",
            "range": "stddev: 0.07389745447749041",
            "extra": "mean: 6.864346892000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5898496134148259,
            "unit": "iter/sec",
            "range": "stddev: 0.00419491921204712",
            "extra": "mean: 1.6953473856000074 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4529.459429047135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000582792195416292",
            "extra": "mean: 220.776897478552 usec\nrounds: 1824"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4744.256372383389,
            "unit": "iter/sec",
            "range": "stddev: 0.00006443256937067815",
            "extra": "mean: 210.78118919143202 usec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10386.75753656465,
            "unit": "iter/sec",
            "range": "stddev: 0.000015122682978306236",
            "extra": "mean: 96.27643626797736 usec\nrounds: 4919"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4471.7927996457365,
            "unit": "iter/sec",
            "range": "stddev: 0.00005912642639518004",
            "extra": "mean: 223.62395683431976 usec\nrounds: 2224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 102.40665850220782,
            "unit": "iter/sec",
            "range": "stddev: 0.0007132488113710766",
            "extra": "mean: 9.764990037033975 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.87362565276259,
            "unit": "iter/sec",
            "range": "stddev: 0.0005375948861715039",
            "extra": "mean: 45.71715799999083 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.36648541768923,
            "unit": "iter/sec",
            "range": "stddev: 0.0007324464231208758",
            "extra": "mean: 10.270474442105344 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 274.47701945556713,
            "unit": "iter/sec",
            "range": "stddev: 0.00023038401506885215",
            "extra": "mean: 3.643292258067827 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.2011505127833,
            "unit": "iter/sec",
            "range": "stddev: 0.000027195804117889052",
            "extra": "mean: 5.80716212999846 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.85984790988918,
            "unit": "iter/sec",
            "range": "stddev: 0.0007358634206787592",
            "extra": "mean: 11.381763385541255 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1549282.6438577943,
            "unit": "iter/sec",
            "range": "stddev: 1.8592860432430818e-7",
            "extra": "mean: 645.4600159399888 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 102.09017222118865,
            "unit": "iter/sec",
            "range": "stddev: 0.0007983657832317682",
            "extra": "mean: 9.795262151516399 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.058040381068679,
            "unit": "iter/sec",
            "range": "stddev: 0.00042641882404639223",
            "extra": "mean: 110.39915455554844 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.21381213587824,
            "unit": "iter/sec",
            "range": "stddev: 0.0008769921064345995",
            "extra": "mean: 451.70951220000006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 266.63053736873553,
            "unit": "iter/sec",
            "range": "stddev: 0.00023106097732670963",
            "extra": "mean: 3.7505081370970434 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4851.67895516162,
            "unit": "iter/sec",
            "range": "stddev: 0.000058827984215169",
            "extra": "mean: 206.11421514940034 usec\nrounds: 2231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9501304.365702063,
            "unit": "iter/sec",
            "range": "stddev: 1.0177197518579334e-8",
            "extra": "mean: 105.24870707327194 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.00695821368169,
            "unit": "iter/sec",
            "range": "stddev: 0.0362964051713954",
            "extra": "mean: 38.4512480000034 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.514143840496049,
            "unit": "iter/sec",
            "range": "stddev: 0.0016615205518376338",
            "extra": "mean: 660.4392351999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4855.348511962831,
            "unit": "iter/sec",
            "range": "stddev: 0.00007330480818729385",
            "extra": "mean: 205.95843893309697 usec\nrounds: 1875"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7508024885953276,
            "unit": "iter/sec",
            "range": "stddev: 0.0071826870980472605",
            "extra": "mean: 1.3319082118000096 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.80074567292542,
            "unit": "iter/sec",
            "range": "stddev: 0.0006856164727110051",
            "extra": "mean: 11.26116669879374 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 258.57111533108514,
            "unit": "iter/sec",
            "range": "stddev: 0.0002957970693093712",
            "extra": "mean: 3.8674079999986026 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.36928894546084,
            "unit": "iter/sec",
            "range": "stddev: 0.0006946331657976153",
            "extra": "mean: 10.944596500000227 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 137.4459273110932,
            "unit": "iter/sec",
            "range": "stddev: 0.00010289922930506282",
            "extra": "mean: 7.275588440948228 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 196.25390768252473,
            "unit": "iter/sec",
            "range": "stddev: 0.004362148556568911",
            "extra": "mean: 5.095439942106407 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 84.11945319312407,
            "unit": "iter/sec",
            "range": "stddev: 0.0002464323201068279",
            "extra": "mean: 11.887856637681283 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5119171.699281622,
            "unit": "iter/sec",
            "range": "stddev: 2.519550515546881e-8",
            "extra": "mean: 195.34410227723995 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 92.55995688229368,
            "unit": "iter/sec",
            "range": "stddev: 0.0007376206714599902",
            "extra": "mean: 10.803807971428471 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 77.51703263804163,
            "unit": "iter/sec",
            "range": "stddev: 0.023732448659149717",
            "extra": "mean: 12.900390610530776 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.867691013114662,
            "unit": "iter/sec",
            "range": "stddev: 0.00044062824431901205",
            "extra": "mean: 205.43621139997867 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 114.82868703217969,
            "unit": "iter/sec",
            "range": "stddev: 0.00004120040099653331",
            "extra": "mean: 8.708625221150175 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1475.8893395814841,
            "unit": "iter/sec",
            "range": "stddev: 0.000009297810164027071",
            "extra": "mean: 677.5575737159052 usec\nrounds: 1187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.30578961164445,
            "unit": "iter/sec",
            "range": "stddev: 0.0002873099454002438",
            "extra": "mean: 24.810331459456073 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1642982.3730773407,
            "unit": "iter/sec",
            "range": "stddev: 2.2525198374445755e-7",
            "extra": "mean: 608.649256611913 nsec\nrounds: 156251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2263172.8204839765,
            "unit": "iter/sec",
            "range": "stddev: 3.4600983040022894e-8",
            "extra": "mean: 441.85755102281865 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.86577525051158,
            "unit": "iter/sec",
            "range": "stddev: 0.00006221934155991716",
            "extra": "mean: 7.201198410450785 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.80225055486682,
            "unit": "iter/sec",
            "range": "stddev: 0.0007334420420631889",
            "extra": "mean: 12.375892913044225 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 456.8884695950412,
            "unit": "iter/sec",
            "range": "stddev: 0.00003749081929787885",
            "extra": "mean: 2.1887179619269896 msec\nrounds: 394"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4673.512437560715,
            "unit": "iter/sec",
            "range": "stddev: 0.00005751131977145108",
            "extra": "mean: 213.97182811862558 usec\nrounds: 2269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 247.27155457253255,
            "unit": "iter/sec",
            "range": "stddev: 0.000037955318154904235",
            "extra": "mean: 4.04413682652959 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5953748.15195223,
            "unit": "iter/sec",
            "range": "stddev: 1.0608843261568685e-8",
            "extra": "mean: 167.9614210204547 nsec\nrounds: 55249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 272.6580008416451,
            "unit": "iter/sec",
            "range": "stddev: 0.00022656042399507242",
            "extra": "mean: 3.6675982252975667 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4462.74305241105,
            "unit": "iter/sec",
            "range": "stddev: 0.00006293406827894363",
            "extra": "mean: 224.07743135911406 usec\nrounds: 2870"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.31360134862484,
            "unit": "iter/sec",
            "range": "stddev: 0.00015334340878888096",
            "extra": "mean: 10.602924559137097 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11204.823001277062,
            "unit": "iter/sec",
            "range": "stddev: 0.000005409325900304801",
            "extra": "mean: 89.24728216465586 usec\nrounds: 4749"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.684665081222576,
            "unit": "iter/sec",
            "range": "stddev: 0.0007702343478481727",
            "extra": "mean: 18.286662239125178 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4627132.065078779,
            "unit": "iter/sec",
            "range": "stddev: 2.24988429388549e-8",
            "extra": "mean: 216.1165892686178 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.38990436093671,
            "unit": "iter/sec",
            "range": "stddev: 0.018963830364879638",
            "extra": "mean: 11.849758659791663 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 142.96061539569862,
            "unit": "iter/sec",
            "range": "stddev: 0.004074668984711605",
            "extra": "mean: 6.994933515304997 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143990.68739950474,
            "unit": "iter/sec",
            "range": "stddev: 7.824425612547398e-7",
            "extra": "mean: 6.944893576523335 usec\nrounds: 34842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 301.4785229587267,
            "unit": "iter/sec",
            "range": "stddev: 0.000025231160916811512",
            "extra": "mean: 3.316985867470576 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 269.9867616273077,
            "unit": "iter/sec",
            "range": "stddev: 0.0002344721817746903",
            "extra": "mean: 3.70388530894122 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 274.9613474667612,
            "unit": "iter/sec",
            "range": "stddev: 0.00022370841126692065",
            "extra": "mean: 3.6368748160898696 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 652221.6890580828,
            "unit": "iter/sec",
            "range": "stddev: 2.2662335898217232e-7",
            "extra": "mean: 1.533221014842618 usec\nrounds: 14266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.78405517213135,
            "unit": "iter/sec",
            "range": "stddev: 0.0001352260498384339",
            "extra": "mean: 15.435896955554854 msec\nrounds: 45"
          }
        ]
      }
    ]
  }
}