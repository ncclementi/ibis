window.BENCHMARK_DATA = {
  "lastUpdate": 1680599146438,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "420b9e5b2546dcfd3b631fdefd849eea69220bd2",
          "message": "chore(deps): pre-commit.ci autoupdate\n\nupdates:\n- [github.com/psf/black: 23.1.0 → 23.3.0](https://github.com/psf/black/compare/23.1.0...23.3.0)",
          "timestamp": "2023-04-04T04:57:30-04:00",
          "tree_id": "16485a167d8d09a9da2804ab5b3ca27f2067473e",
          "url": "https://github.com/ibis-project/ibis/commit/420b9e5b2546dcfd3b631fdefd849eea69220bd2"
        },
        "date": 1680599056471,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.819605597786946,
            "unit": "iter/sec",
            "range": "stddev: 0.012192488669265929",
            "extra": "mean: 25.760179285721765 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4992.9627891669015,
            "unit": "iter/sec",
            "range": "stddev: 0.00005746048124716692",
            "extra": "mean: 200.28188517039888 usec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7750753991333031,
            "unit": "iter/sec",
            "range": "stddev: 0.012052046971674502",
            "extra": "mean: 1.2901970584000082 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.796870411223775,
            "unit": "iter/sec",
            "range": "stddev: 0.03602599496848201",
            "extra": "mean: 208.4692548000021 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 290.3362985280705,
            "unit": "iter/sec",
            "range": "stddev: 0.00025536216229086556",
            "extra": "mean: 3.444281700461637 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 614.5760289088713,
            "unit": "iter/sec",
            "range": "stddev: 0.00010893101578204148",
            "extra": "mean: 1.627137982871569 msec\nrounds: 467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 283.8201101747341,
            "unit": "iter/sec",
            "range": "stddev: 0.00026493333140120695",
            "extra": "mean: 3.5233585082619734 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 99.30084429045972,
            "unit": "iter/sec",
            "range": "stddev: 0.0007937447232139164",
            "extra": "mean: 10.070407831326712 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1658190.7048602693,
            "unit": "iter/sec",
            "range": "stddev: 3.004420707389345e-7",
            "extra": "mean: 603.0669434275154 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7492.462006982021,
            "unit": "iter/sec",
            "range": "stddev: 0.000021386489477203396",
            "extra": "mean: 133.46747692122125 usec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11134.209089743967,
            "unit": "iter/sec",
            "range": "stddev: 0.00001962204500511467",
            "extra": "mean: 89.81329449984267 usec\nrounds: 6146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.501805216112544,
            "unit": "iter/sec",
            "range": "stddev: 0.0007078562303992878",
            "extra": "mean: 24.69025749998366 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4987138.219826848,
            "unit": "iter/sec",
            "range": "stddev: 4.7576108771438946e-8",
            "extra": "mean: 200.5157980231854 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 187.1522514447234,
            "unit": "iter/sec",
            "range": "stddev: 0.00042846343151960913",
            "extra": "mean: 5.343243227268128 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.53959976993161,
            "unit": "iter/sec",
            "range": "stddev: 0.0007293182155392718",
            "extra": "mean: 16.79554454286095 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 89.5637785086436,
            "unit": "iter/sec",
            "range": "stddev: 0.0005905075808481366",
            "extra": "mean: 11.165227915250275 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 98.11657296878944,
            "unit": "iter/sec",
            "range": "stddev: 0.0006712987247377046",
            "extra": "mean: 10.191958093747289 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 89.9998289461407,
            "unit": "iter/sec",
            "range": "stddev: 0.01494915837521501",
            "extra": "mean: 11.111132228911655 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.52905432531775,
            "unit": "iter/sec",
            "range": "stddev: 0.001375535488062211",
            "extra": "mean: 25.297847800004547 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6296196.493103648,
            "unit": "iter/sec",
            "range": "stddev: 2.4088488502030966e-8",
            "extra": "mean: 158.82604697853245 nsec\nrounds: 75183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.87633582592183,
            "unit": "iter/sec",
            "range": "stddev: 0.0008609161254663503",
            "extra": "mean: 11.251588971429424 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 108.35715215416505,
            "unit": "iter/sec",
            "range": "stddev: 0.0009106000072521982",
            "extra": "mean: 9.228740144233864 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 93.77689550667614,
            "unit": "iter/sec",
            "range": "stddev: 0.0007725779355918573",
            "extra": "mean: 10.66360743333424 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 110.50718058271917,
            "unit": "iter/sec",
            "range": "stddev: 0.0007588227931290592",
            "extra": "mean: 9.049185715596634 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 94.14419291536456,
            "unit": "iter/sec",
            "range": "stddev: 0.015260148735183512",
            "extra": "mean: 10.622004066666099 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6198969915473058,
            "unit": "iter/sec",
            "range": "stddev: 0.012718260341903494",
            "extra": "mean: 617.3232033999966 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 290.0390148510406,
            "unit": "iter/sec",
            "range": "stddev: 0.0002772226865186523",
            "extra": "mean: 3.4478120142339614 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 148.51728265915594,
            "unit": "iter/sec",
            "range": "stddev: 0.0003343899972059066",
            "extra": "mean: 6.733223111110774 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 110.08047385417653,
            "unit": "iter/sec",
            "range": "stddev: 0.0007593561470726862",
            "extra": "mean: 9.084263221147637 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4813.344035559833,
            "unit": "iter/sec",
            "range": "stddev: 0.00005930101495011453",
            "extra": "mean: 207.7557707515273 usec\nrounds: 2578"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15427521261789304,
            "unit": "iter/sec",
            "range": "stddev: 0.10395738156916932",
            "extra": "mean: 6.481922682399977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4960.919318238068,
            "unit": "iter/sec",
            "range": "stddev: 0.00005803380212257913",
            "extra": "mean: 201.57554192096043 usec\nrounds: 1801"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.306876149106953,
            "unit": "iter/sec",
            "range": "stddev: 0.006720074204109348",
            "extra": "mean: 433.4866439999928 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.693711441919895,
            "unit": "iter/sec",
            "range": "stddev: 0.0007149403256132395",
            "extra": "mean: 19.344712772723682 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 103.93774520456185,
            "unit": "iter/sec",
            "range": "stddev: 0.0004969181230275294",
            "extra": "mean: 9.62114386868679 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1614.2651649758168,
            "unit": "iter/sec",
            "range": "stddev: 0.000050725486637581604",
            "extra": "mean: 619.4769122797622 usec\nrounds: 1197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 483091.5797507706,
            "unit": "iter/sec",
            "range": "stddev: 9.49226830191155e-7",
            "extra": "mean: 2.070000889926306 usec\nrounds: 2247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 268.0613400557829,
            "unit": "iter/sec",
            "range": "stddev: 0.00021239645071375942",
            "extra": "mean: 3.730489446154013 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1833111.153388454,
            "unit": "iter/sec",
            "range": "stddev: 3.7569464368292784e-7",
            "extra": "mean: 545.5206565905881 nsec\nrounds: 178540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.68672514349365,
            "unit": "iter/sec",
            "range": "stddev: 0.0003755930670162292",
            "extra": "mean: 11.535791649121444 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12847.388604825825,
            "unit": "iter/sec",
            "range": "stddev: 0.000007765101074648393",
            "extra": "mean: 77.83682978378758 usec\nrounds: 5728"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11978.169380939205,
            "unit": "iter/sec",
            "range": "stddev: 0.000009455190519784295",
            "extra": "mean: 83.48521115349182 usec\nrounds: 3945"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7846504123972613,
            "unit": "iter/sec",
            "range": "stddev: 0.021313300365948994",
            "extra": "mean: 1.2744529081999758 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10719704.141411226,
            "unit": "iter/sec",
            "range": "stddev: 1.5707390172061814e-8",
            "extra": "mean: 93.28615667078633 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 159384.47680238425,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014388394985227525",
            "extra": "mean: 6.274136729387193 usec\nrounds: 31054"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 65573.58697437616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025773126490650355",
            "extra": "mean: 15.25004267939109 usec\nrounds: 11481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.71551485940952,
            "unit": "iter/sec",
            "range": "stddev: 0.0005404977685498088",
            "extra": "mean: 10.903280666666893 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4915.314995150173,
            "unit": "iter/sec",
            "range": "stddev: 0.000056135531342706416",
            "extra": "mean: 203.4457610522778 usec\nrounds: 1900"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 122.80617719315632,
            "unit": "iter/sec",
            "range": "stddev: 0.00035686724191482397",
            "extra": "mean: 8.142912863635068 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 454.9455310713948,
            "unit": "iter/sec",
            "range": "stddev: 0.00022181257876939084",
            "extra": "mean: 2.1980653324476105 msec\nrounds: 376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 663.1069837931673,
            "unit": "iter/sec",
            "range": "stddev: 0.000058705846738387564",
            "extra": "mean: 1.508052281819904 msec\nrounds: 550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 285.79284146843054,
            "unit": "iter/sec",
            "range": "stddev: 0.00024350211089806334",
            "extra": "mean: 3.4990379565209047 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1620650.699923963,
            "unit": "iter/sec",
            "range": "stddev: 3.366074478088083e-7",
            "extra": "mean: 617.0361078096086 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6055194959303408,
            "unit": "iter/sec",
            "range": "stddev: 0.07416174919832094",
            "extra": "mean: 1.651474488800011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1751521.6340418658,
            "unit": "iter/sec",
            "range": "stddev: 3.424549971112212e-7",
            "extra": "mean: 570.9321429803689 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4273.336168335062,
            "unit": "iter/sec",
            "range": "stddev: 0.00027341822891311664",
            "extra": "mean: 234.00920512874387 usec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 315.64215970667476,
            "unit": "iter/sec",
            "range": "stddev: 0.00014410273103068345",
            "extra": "mean: 3.168144587938749 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 258.59988435163143,
            "unit": "iter/sec",
            "range": "stddev: 0.0001636121526098219",
            "extra": "mean: 3.866977754097713 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.41238395604253,
            "unit": "iter/sec",
            "range": "stddev: 0.00036074144157927817",
            "extra": "mean: 14.83406966666641 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7747193054559792,
            "unit": "iter/sec",
            "range": "stddev: 0.017141220025223825",
            "extra": "mean: 1.290790087400012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.3786785011843,
            "unit": "iter/sec",
            "range": "stddev: 0.0007673679647445869",
            "extra": "mean: 10.269188444448218 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5054.658710870647,
            "unit": "iter/sec",
            "range": "stddev: 0.00006762019393800943",
            "extra": "mean: 197.8372937127052 usec\nrounds: 3054"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 266.4758235385552,
            "unit": "iter/sec",
            "range": "stddev: 0.00035394695768137805",
            "extra": "mean: 3.7526856535085047 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 718066.1127382533,
            "unit": "iter/sec",
            "range": "stddev: 6.248015540362957e-7",
            "extra": "mean: 1.3926294282104859 usec\nrounds: 22271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 146.10865146616317,
            "unit": "iter/sec",
            "range": "stddev: 0.00026693435926135247",
            "extra": "mean: 6.8442216799981 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 104.2472649351014,
            "unit": "iter/sec",
            "range": "stddev: 0.0006923552745528692",
            "extra": "mean: 9.592577806454155 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4734.122408407182,
            "unit": "iter/sec",
            "range": "stddev: 0.00010545198001878157",
            "extra": "mean: 211.23239192635384 usec\nrounds: 2725"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.002087529264728,
            "unit": "iter/sec",
            "range": "stddev: 0.002142386774127773",
            "extra": "mean: 43.47431504761192 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 76.2559259875123,
            "unit": "iter/sec",
            "range": "stddev: 0.02014135769255031",
            "extra": "mean: 13.11373492682733 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.29091557124769,
            "unit": "iter/sec",
            "range": "stddev: 0.00044923933352890863",
            "extra": "mean: 18.086153750002627 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.064145395743,
            "unit": "iter/sec",
            "range": "stddev: 0.0008343931638530947",
            "extra": "mean: 10.09446955813513 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.310416121913606,
            "unit": "iter/sec",
            "range": "stddev: 0.0016436860901254508",
            "extra": "mean: 69.87916993333936 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 240.49823480457835,
            "unit": "iter/sec",
            "range": "stddev: 0.011547250886438602",
            "extra": "mean: 4.15803467668929 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1040.4387426645953,
            "unit": "iter/sec",
            "range": "stddev: 0.00006719051453123318",
            "extra": "mean: 961.132990337297 usec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.87935500645537,
            "unit": "iter/sec",
            "range": "stddev: 0.000494597869762874",
            "extra": "mean: 9.626551877780306 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5562480.044948949,
            "unit": "iter/sec",
            "range": "stddev: 5.32634603518942e-8",
            "extra": "mean: 179.77592583137988 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 128.37201398442056,
            "unit": "iter/sec",
            "range": "stddev: 0.004345773052580591",
            "extra": "mean: 7.789859868688838 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 96.37463594944496,
            "unit": "iter/sec",
            "range": "stddev: 0.0007575647423269229",
            "extra": "mean: 10.376174085104383 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 182.74903237418124,
            "unit": "iter/sec",
            "range": "stddev: 0.0046787492409124335",
            "extra": "mean: 5.471985197450928 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.97000546833547,
            "unit": "iter/sec",
            "range": "stddev: 0.0007244685105018048",
            "extra": "mean: 10.992634273811015 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 267.5536468263394,
            "unit": "iter/sec",
            "range": "stddev: 0.0002286490936150953",
            "extra": "mean: 3.7375681918814148 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4893.030918500244,
            "unit": "iter/sec",
            "range": "stddev: 0.0000357951157937496",
            "extra": "mean: 204.37230351826767 usec\nrounds: 2102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3173.385594808617,
            "unit": "iter/sec",
            "range": "stddev: 0.005487070204100676",
            "extra": "mean: 315.1208607097458 usec\nrounds: 2283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.384589522562656,
            "unit": "iter/sec",
            "range": "stddev: 0.0013410160855221202",
            "extra": "mean: 106.55767070001048 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.50895936991782,
            "unit": "iter/sec",
            "range": "stddev: 0.0009837505226990596",
            "extra": "mean: 25.967982941163907 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 140.03323733121547,
            "unit": "iter/sec",
            "range": "stddev: 0.00013056291535043813",
            "extra": "mean: 7.141161763151534 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 222.08862481017223,
            "unit": "iter/sec",
            "range": "stddev: 0.012027857202975417",
            "extra": "mean: 4.5027069749958555 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.10241439882023,
            "unit": "iter/sec",
            "range": "stddev: 0.0018163770205377508",
            "extra": "mean: 9.989769038096103 msec\nrounds: 105"
          }
        ]
      }
    ]
  }
}