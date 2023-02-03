window.BENCHMARK_DATA = {
  "lastUpdate": 1675452507530,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "594199b67b81d71848bf38c160f3b8e9fbc69094",
          "message": "docs(streamlit): fix url for support matrix\n\nQuick fix for a URL we missed in the de-versioning.",
          "timestamp": "2023-02-03T14:22:09-05:00",
          "tree_id": "1f4470389c5d4ec87f7ca8629f856805ae2c068f",
          "url": "https://github.com/ibis-project/ibis/commit/594199b67b81d71848bf38c160f3b8e9fbc69094"
        },
        "date": 1675452421028,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 331868.95491559117,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030266122280213624",
            "extra": "mean: 3.0132375601518495 usec\nrounds: 1246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 107.47467900832035,
            "unit": "iter/sec",
            "range": "stddev: 0.006988069604151663",
            "extra": "mean: 9.304517205606944 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3666.464036473147,
            "unit": "iter/sec",
            "range": "stddev: 0.00016189186920570196",
            "extra": "mean: 272.7423452275076 usec\nrounds: 2242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 168.36166323401957,
            "unit": "iter/sec",
            "range": "stddev: 0.0004287476308205502",
            "extra": "mean: 5.939594446807161 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 199.20710539448015,
            "unit": "iter/sec",
            "range": "stddev: 0.00023505880802510395",
            "extra": "mean: 5.019901263159006 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7162.532896680249,
            "unit": "iter/sec",
            "range": "stddev: 0.00018210650442961577",
            "extra": "mean: 139.61541460612187 usec\nrounds: 2629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2285.7186745013964,
            "unit": "iter/sec",
            "range": "stddev: 0.0025093043858084637",
            "extra": "mean: 437.49915996033 usec\nrounds: 1019"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 138.19209120548825,
            "unit": "iter/sec",
            "range": "stddev: 0.0006813000986783614",
            "extra": "mean: 7.23630412765825 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.503016334744018,
            "unit": "iter/sec",
            "range": "stddev: 0.001373746794487704",
            "extra": "mean: 36.35964825926092 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 59.17942780680164,
            "unit": "iter/sec",
            "range": "stddev: 0.0013177400879875864",
            "extra": "mean: 16.897763919999704 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.4914846874762495,
            "unit": "iter/sec",
            "range": "stddev: 0.0050435927308072415",
            "extra": "mean: 286.41110860000083 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3066.811511042436,
            "unit": "iter/sec",
            "range": "stddev: 0.00008324451904660033",
            "extra": "mean: 326.0715555551346 usec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 50.609552234945646,
            "unit": "iter/sec",
            "range": "stddev: 0.0008499015066576271",
            "extra": "mean: 19.759115736841174 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3728.849065022457,
            "unit": "iter/sec",
            "range": "stddev: 0.00009146253180007978",
            "extra": "mean: 268.1792645833406 usec\nrounds: 2400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 123.17972646470349,
            "unit": "iter/sec",
            "range": "stddev: 0.0010992546804298132",
            "extra": "mean: 8.118219034091984 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.9492950776064515,
            "unit": "iter/sec",
            "range": "stddev: 0.025174012293016575",
            "extra": "mean: 1.0534132363999986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 84.76147145479595,
            "unit": "iter/sec",
            "range": "stddev: 0.0006342547011452818",
            "extra": "mean: 11.797813120001212 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 727.7458176660404,
            "unit": "iter/sec",
            "range": "stddev: 0.00014333787741364022",
            "extra": "mean: 1.3741061449272334 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 54.14302316580698,
            "unit": "iter/sec",
            "range": "stddev: 0.018040615370925862",
            "extra": "mean: 18.46960035714318 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 182.87651281988167,
            "unit": "iter/sec",
            "range": "stddev: 0.0008916440862714877",
            "extra": "mean: 5.4681707594945115 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 74.76100728272047,
            "unit": "iter/sec",
            "range": "stddev: 0.0004951970777237467",
            "extra": "mean: 13.375956749998608 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3550575.35387105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010209508345345532",
            "extra": "mean: 281.64449429570703 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6430.779356904381,
            "unit": "iter/sec",
            "range": "stddev: 0.00006397379524111122",
            "extra": "mean: 155.50214748486962 usec\nrounds: 2624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 186.79698952990853,
            "unit": "iter/sec",
            "range": "stddev: 0.0002818403553073293",
            "extra": "mean: 5.3534053333332094 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 110.0385481921446,
            "unit": "iter/sec",
            "range": "stddev: 0.0012082644766644645",
            "extra": "mean: 9.087724405940387 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 109.80506663733634,
            "unit": "iter/sec",
            "range": "stddev: 0.0013509709779328262",
            "extra": "mean: 9.107047886076106 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 155.90484146742196,
            "unit": "iter/sec",
            "range": "stddev: 0.0008794754449209548",
            "extra": "mean: 6.414168993006935 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 66.37695003388698,
            "unit": "iter/sec",
            "range": "stddev: 0.0007343365622597526",
            "extra": "mean: 15.0654707619057 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 63.03130078664238,
            "unit": "iter/sec",
            "range": "stddev: 0.001565599830844247",
            "extra": "mean: 15.865133473683926 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 168.91998057232692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005431940322688684",
            "extra": "mean: 5.9199627931038465 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.37822813587396,
            "unit": "iter/sec",
            "range": "stddev: 0.0018202199341410927",
            "extra": "mean: 24.76582173529184 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 97.7806960473511,
            "unit": "iter/sec",
            "range": "stddev: 0.0008971473615705052",
            "extra": "mean: 10.226967493826612 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 309.2031307722099,
            "unit": "iter/sec",
            "range": "stddev: 0.0002815830812549882",
            "extra": "mean: 3.234119905262863 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 105.55496864335308,
            "unit": "iter/sec",
            "range": "stddev: 0.0014152316732640978",
            "extra": "mean: 9.473736886595828 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7375899322727026,
            "unit": "iter/sec",
            "range": "stddev: 0.013345569174372187",
            "extra": "mean: 575.5097802000023 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5284141520520336,
            "unit": "iter/sec",
            "range": "stddev: 0.028723297189613077",
            "extra": "mean: 1.8924549921999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.476414520657792,
            "unit": "iter/sec",
            "range": "stddev: 0.004954627407980296",
            "extra": "mean: 154.4064229999955 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 27.388469450708836,
            "unit": "iter/sec",
            "range": "stddev: 0.0014108251335310444",
            "extra": "mean: 36.51171533333416 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.76605267882214,
            "unit": "iter/sec",
            "range": "stddev: 0.001483459456645023",
            "extra": "mean: 19.31767921739003 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1384007.4419946396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016056053993632322",
            "extra": "mean: 722.5394673881191 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1045.2402892946177,
            "unit": "iter/sec",
            "range": "stddev: 0.0001652900767518101",
            "extra": "mean: 956.7178095238291 usec\nrounds: 693"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4398930003315826,
            "unit": "iter/sec",
            "range": "stddev: 0.07107409930368981",
            "extra": "mean: 2.2732800913999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 176.22049300181413,
            "unit": "iter/sec",
            "range": "stddev: 0.0005759543512925716",
            "extra": "mean: 5.674708900001235 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3430.26203003886,
            "unit": "iter/sec",
            "range": "stddev: 0.00012577655334872543",
            "extra": "mean: 291.5229190198836 usec\nrounds: 2408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 218.72974448092202,
            "unit": "iter/sec",
            "range": "stddev: 0.0004965399836680954",
            "extra": "mean: 4.571851909639212 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 164.00753146642154,
            "unit": "iter/sec",
            "range": "stddev: 0.0008378931536634141",
            "extra": "mean: 6.097280966665468 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 93.4641420778971,
            "unit": "iter/sec",
            "range": "stddev: 0.015862164083581598",
            "extra": "mean: 10.699290420561036 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11633.236734194405,
            "unit": "iter/sec",
            "range": "stddev: 0.00015031565663775525",
            "extra": "mean: 85.9605991736271 usec\nrounds: 4114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 56.96644230175738,
            "unit": "iter/sec",
            "range": "stddev: 0.0013671276488099486",
            "extra": "mean: 17.55419435714262 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1238684.112984271,
            "unit": "iter/sec",
            "range": "stddev: 0.000013001621591956915",
            "extra": "mean: 807.3083278599362 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1794990.814976443,
            "unit": "iter/sec",
            "range": "stddev: 4.068259721800903e-7",
            "extra": "mean: 557.1059147804258 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 127.52729924608576,
            "unit": "iter/sec",
            "range": "stddev: 0.0008558148149567133",
            "extra": "mean: 7.841458306666785 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3981.183040259706,
            "unit": "iter/sec",
            "range": "stddev: 0.00007592342867511503",
            "extra": "mean: 251.18161860118005 usec\nrounds: 1387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 71.4154623514793,
            "unit": "iter/sec",
            "range": "stddev: 0.0013620287394001329",
            "extra": "mean: 14.002569850747257 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 146.47651259159147,
            "unit": "iter/sec",
            "range": "stddev: 0.012898573299913818",
            "extra": "mean: 6.827033101123991 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.74896945563087,
            "unit": "iter/sec",
            "range": "stddev: 0.0007616442261783122",
            "extra": "mean: 8.869260666666415 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 46483.07066770437,
            "unit": "iter/sec",
            "range": "stddev: 0.000011057661294157567",
            "extra": "mean: 21.513208693735947 usec\nrounds: 9018"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 484.1663391497813,
            "unit": "iter/sec",
            "range": "stddev: 0.0002611275727696158",
            "extra": "mean: 2.065405872196829 msec\nrounds: 446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.48890829126635,
            "unit": "iter/sec",
            "range": "stddev: 0.0013426041391314046",
            "extra": "mean: 51.31123740000021 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1237295.8910199315,
            "unit": "iter/sec",
            "range": "stddev: 0.000005795904987000632",
            "extra": "mean: 808.2141121277604 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 112.68894897509,
            "unit": "iter/sec",
            "range": "stddev: 0.0008511729586577434",
            "extra": "mean: 8.873984619565944 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3659482.453823151,
            "unit": "iter/sec",
            "range": "stddev: 3.549389008694195e-7",
            "extra": "mean: 273.26268471555386 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.278323875055392,
            "unit": "iter/sec",
            "range": "stddev: 0.002324469199278567",
            "extra": "mean: 88.66565733333213 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 120.35511509305731,
            "unit": "iter/sec",
            "range": "stddev: 0.0004856608460131323",
            "extra": "mean: 8.308745326086145 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 67.07402518253403,
            "unit": "iter/sec",
            "range": "stddev: 0.0016468215896887643",
            "extra": "mean: 14.90890098333324 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 103627.59064346967,
            "unit": "iter/sec",
            "range": "stddev: 0.00003101152168515833",
            "extra": "mean: 9.649939690680412 usec\nrounds: 37175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 420.8615589274115,
            "unit": "iter/sec",
            "range": "stddev: 0.00029091346491829815",
            "extra": "mean: 2.376078258486126 msec\nrounds: 383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.43252412305082,
            "unit": "iter/sec",
            "range": "stddev: 0.0018630948430725168",
            "extra": "mean: 33.976019039998846 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 71.48659505528244,
            "unit": "iter/sec",
            "range": "stddev: 0.000814032195810483",
            "extra": "mean: 13.988636600004156 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 65.76030132169979,
            "unit": "iter/sec",
            "range": "stddev: 0.0015821351662027314",
            "extra": "mean: 15.206742972602788 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3164.2150025782107,
            "unit": "iter/sec",
            "range": "stddev: 0.00014249337237134623",
            "extra": "mean: 316.0341503928138 usec\nrounds: 1782"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4987866280559834,
            "unit": "iter/sec",
            "range": "stddev: 0.02676121459095319",
            "extra": "mean: 2.0048652946000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 122.52409936718188,
            "unit": "iter/sec",
            "range": "stddev: 0.001097099032619731",
            "extra": "mean: 8.161659666668404 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5111606482665797,
            "unit": "iter/sec",
            "range": "stddev: 0.012911969656690904",
            "extra": "mean: 1.956332130399994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4278646.648460829,
            "unit": "iter/sec",
            "range": "stddev: 3.251627875219344e-7",
            "extra": "mean: 233.71876253436884 nsec\nrounds: 52357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08052839301372614,
            "unit": "iter/sec",
            "range": "stddev: 0.1444988082226177",
            "extra": "mean: 12.41798032439998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8739695.685504511,
            "unit": "iter/sec",
            "range": "stddev: 1.2509119866624104e-7",
            "extra": "mean: 114.42045993190324 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.72562600859994,
            "unit": "iter/sec",
            "range": "stddev: 0.0015266496871375109",
            "extra": "mean: 18.613091634147334 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.395580893523423,
            "unit": "iter/sec",
            "range": "stddev: 0.0023463456842560968",
            "extra": "mean: 31.851616423070848 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3661.4343768096624,
            "unit": "iter/sec",
            "range": "stddev: 0.00009782764089552545",
            "extra": "mean: 273.1170074585183 usec\nrounds: 1475"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 491060.5256510515,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026214120906271835",
            "extra": "mean: 2.0364088493453893 usec\nrounds: 12611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7927.900196949035,
            "unit": "iter/sec",
            "range": "stddev: 0.00008941600502290234",
            "extra": "mean: 126.13680484838079 usec\nrounds: 3300"
          }
        ]
      }
    ]
  }
}