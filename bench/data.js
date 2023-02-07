window.BENCHMARK_DATA = {
  "lastUpdate": 1675776235314,
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
          "id": "41d196ebd870a53097a2a0b847ac86b8aea228e9",
          "message": "chore: make pre-commit-yaml match lock file",
          "timestamp": "2023-02-07T08:19:03-05:00",
          "tree_id": "be720fb5972a79fc82c8658531653b05794fdb60",
          "url": "https://github.com/ibis-project/ibis/commit/41d196ebd870a53097a2a0b847ac86b8aea228e9"
        },
        "date": 1675776155049,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4460.408652477631,
            "unit": "iter/sec",
            "range": "stddev: 0.00001907172479889892",
            "extra": "mean: 224.19470454675226 usec\nrounds: 396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.36764722034457,
            "unit": "iter/sec",
            "range": "stddev: 0.0006041437956999829",
            "extra": "mean: 10.944793156251187 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.80502735505212,
            "unit": "iter/sec",
            "range": "stddev: 0.000683666312359401",
            "extra": "mean: 10.775278328125637 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8718101917085257,
            "unit": "iter/sec",
            "range": "stddev: 0.001671881493160093",
            "extra": "mean: 1.1470386668000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9254.152659744655,
            "unit": "iter/sec",
            "range": "stddev: 0.00006231249818615975",
            "extra": "mean: 108.05959624482706 usec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1565678.9629753262,
            "unit": "iter/sec",
            "range": "stddev: 1.1384911981127878e-7",
            "extra": "mean: 638.7005405627074 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 145.59774725943933,
            "unit": "iter/sec",
            "range": "stddev: 0.00861961812796917",
            "extra": "mean: 6.86823813433122 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 610.7121299556983,
            "unit": "iter/sec",
            "range": "stddev: 0.000030397302809042185",
            "extra": "mean: 1.6374326805536692 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.86762702129548,
            "unit": "iter/sec",
            "range": "stddev: 0.00028537536537920615",
            "extra": "mean: 4.507192028984099 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.21728220737884,
            "unit": "iter/sec",
            "range": "stddev: 0.0006427779478578943",
            "extra": "mean: 10.843954365855126 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5844805654543122,
            "unit": "iter/sec",
            "range": "stddev: 0.031363843887951944",
            "extra": "mean: 1.7109208741999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 161.476241878696,
            "unit": "iter/sec",
            "range": "stddev: 0.0006766411999684145",
            "extra": "mean: 6.192861490740037 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6041.371190076797,
            "unit": "iter/sec",
            "range": "stddev: 0.00004850588773284952",
            "extra": "mean: 165.52533663922878 usec\nrounds: 3630"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5152.473831399149,
            "unit": "iter/sec",
            "range": "stddev: 0.00005177610451214938",
            "extra": "mean: 194.08152912995018 usec\nrounds: 2506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 109.72269325964358,
            "unit": "iter/sec",
            "range": "stddev: 0.008573467787639072",
            "extra": "mean: 9.113884924731462 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4727206.591875263,
            "unit": "iter/sec",
            "range": "stddev: 1.3291009874073507e-8",
            "extra": "mean: 211.54142104107265 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 159.77925406274616,
            "unit": "iter/sec",
            "range": "stddev: 0.0007401966521649019",
            "extra": "mean: 6.258634801282115 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55392.2633048386,
            "unit": "iter/sec",
            "range": "stddev: 7.274792388061904e-7",
            "extra": "mean: 18.053062654196484 usec\nrounds: 4453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 157.71535890678425,
            "unit": "iter/sec",
            "range": "stddev: 0.0007187927813943564",
            "extra": "mean: 6.34053656493302 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 172.11870319120936,
            "unit": "iter/sec",
            "range": "stddev: 0.012641094547276206",
            "extra": "mean: 5.809943843749998 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.21110351531674,
            "unit": "iter/sec",
            "range": "stddev: 0.00029786364755922726",
            "extra": "mean: 108.56462511111114 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 324.25336216479974,
            "unit": "iter/sec",
            "range": "stddev: 0.000059535053052849974",
            "extra": "mean: 3.0840081142836575 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5441535.781700164,
            "unit": "iter/sec",
            "range": "stddev: 5.29574079852586e-9",
            "extra": "mean: 183.77164832086697 nsec\nrounds: 54055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4407376.531197213,
            "unit": "iter/sec",
            "range": "stddev: 1.3635900900677703e-8",
            "extra": "mean: 226.89234580263494 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.40104343673829,
            "unit": "iter/sec",
            "range": "stddev: 0.00039798503507710366",
            "extra": "mean: 25.380038516126724 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.7151469771014,
            "unit": "iter/sec",
            "range": "stddev: 0.000656208911717722",
            "extra": "mean: 11.400539524388604 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 415.0289534600454,
            "unit": "iter/sec",
            "range": "stddev: 0.00012086703782084469",
            "extra": "mean: 2.409470451791671 msec\nrounds: 363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.39723895797498,
            "unit": "iter/sec",
            "range": "stddev: 0.00012324875969767747",
            "extra": "mean: 14.837403066667793 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 273.5170659974537,
            "unit": "iter/sec",
            "range": "stddev: 0.00012029113617429465",
            "extra": "mean: 3.656078995850699 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.04131657814754,
            "unit": "iter/sec",
            "range": "stddev: 0.0006275967083899542",
            "extra": "mean: 11.488796807228654 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.47494134186044,
            "unit": "iter/sec",
            "range": "stddev: 0.00008545131414932787",
            "extra": "mean: 7.068389571433694 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.14033916643539,
            "unit": "iter/sec",
            "range": "stddev: 0.0003677301932143997",
            "extra": "mean: 39.77671078260908 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5971887857183276,
            "unit": "iter/sec",
            "range": "stddev: 0.0019163493277632954",
            "extra": "mean: 626.1000633999913 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 391830.9389366426,
            "unit": "iter/sec",
            "range": "stddev: 4.99174428776181e-7",
            "extra": "mean: 2.5521210824081857 usec\nrounds: 702"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 983.5403017360537,
            "unit": "iter/sec",
            "range": "stddev: 0.00001818874573215138",
            "extra": "mean: 1.016735153846663 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.72678924291328,
            "unit": "iter/sec",
            "range": "stddev: 0.0006147969243996587",
            "extra": "mean: 17.028003963636966 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.03616265380548,
            "unit": "iter/sec",
            "range": "stddev: 0.00012341358565939815",
            "extra": "mean: 14.278337962961826 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15240459975501083,
            "unit": "iter/sec",
            "range": "stddev: 0.07763643542633966",
            "extra": "mean: 6.561481750599995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.980488040588035,
            "unit": "iter/sec",
            "range": "stddev: 0.0006664033256751438",
            "extra": "mean: 28.587365586200374 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.75753327145459,
            "unit": "iter/sec",
            "range": "stddev: 0.00007052861302872155",
            "extra": "mean: 72.68744914285564 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 161.72456650471707,
            "unit": "iter/sec",
            "range": "stddev: 0.0006968334606777337",
            "extra": "mean: 6.1833524838716 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 592644.4149442093,
            "unit": "iter/sec",
            "range": "stddev: 1.9950747311352858e-7",
            "extra": "mean: 1.6873524406606255 usec\nrounds: 17986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.926001108889917,
            "unit": "iter/sec",
            "range": "stddev: 0.0032836163269728963",
            "extra": "mean: 203.00442040000917 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.74201508992164,
            "unit": "iter/sec",
            "range": "stddev: 0.000625969915773332",
            "extra": "mean: 12.233610816908952 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10880.253071399506,
            "unit": "iter/sec",
            "range": "stddev: 0.000002510104908940177",
            "extra": "mean: 91.90962686600193 usec\nrounds: 5695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 283.0513723377885,
            "unit": "iter/sec",
            "range": "stddev: 0.00014808549208216796",
            "extra": "mean: 3.532927580392077 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 245.41014379723143,
            "unit": "iter/sec",
            "range": "stddev: 0.00021604512934826075",
            "extra": "mean: 4.074811189655811 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19025.156140577645,
            "unit": "iter/sec",
            "range": "stddev: 0.000016236370885664745",
            "extra": "mean: 52.56198648836098 usec\nrounds: 7327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5316.050197575732,
            "unit": "iter/sec",
            "range": "stddev: 0.00004260782727204244",
            "extra": "mean: 188.10958565741686 usec\nrounds: 2259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 104.17198069414917,
            "unit": "iter/sec",
            "range": "stddev: 0.00017715999758709225",
            "extra": "mean: 9.599510284209899 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.07133208754107,
            "unit": "iter/sec",
            "range": "stddev: 0.000703128375214338",
            "extra": "mean: 6.941006135713224 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10399.726993653201,
            "unit": "iter/sec",
            "range": "stddev: 0.000003025400003093535",
            "extra": "mean: 96.15637031724825 usec\nrounds: 4912"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8649238997640878,
            "unit": "iter/sec",
            "range": "stddev: 0.0024062824654563705",
            "extra": "mean: 1.1561710808000043 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119035.49848827516,
            "unit": "iter/sec",
            "range": "stddev: 4.069465671738052e-7",
            "extra": "mean: 8.400855313749107 usec\nrounds: 36631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1533632.4042697833,
            "unit": "iter/sec",
            "range": "stddev: 1.2207735053030124e-7",
            "extra": "mean: 652.0467337648199 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.49440686244567,
            "unit": "iter/sec",
            "range": "stddev: 0.00030590732518637214",
            "extra": "mean: 10.929629846154617 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.389147779620004,
            "unit": "iter/sec",
            "range": "stddev: 0.0020802009120603464",
            "extra": "mean: 24.759126027031225 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.72371703692478,
            "unit": "iter/sec",
            "range": "stddev: 0.0001862142945234382",
            "extra": "mean: 11.022476069769027 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.9085472803631,
            "unit": "iter/sec",
            "range": "stddev: 0.000016101000006508375",
            "extra": "mean: 3.746601636363451 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1530923.7822894524,
            "unit": "iter/sec",
            "range": "stddev: 1.1414314800446086e-7",
            "extra": "mean: 653.2003823890755 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 248.6772487922031,
            "unit": "iter/sec",
            "range": "stddev: 0.0002832820708386326",
            "extra": "mean: 4.0212765938857915 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.76701934733602,
            "unit": "iter/sec",
            "range": "stddev: 0.0004335168140438982",
            "extra": "mean: 19.317318489797522 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 149.24865074404968,
            "unit": "iter/sec",
            "range": "stddev: 0.0001570812001980211",
            "extra": "mean: 6.700228075863317 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1585574.6747365803,
            "unit": "iter/sec",
            "range": "stddev: 1.27033441778623e-7",
            "extra": "mean: 630.686158106136 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 144.28156934928637,
            "unit": "iter/sec",
            "range": "stddev: 0.0009022718747358438",
            "extra": "mean: 6.930892175002157 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 244.9658206634773,
            "unit": "iter/sec",
            "range": "stddev: 0.00025954926397306203",
            "extra": "mean: 4.0822021508615025 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6070.8225505619885,
            "unit": "iter/sec",
            "range": "stddev: 0.00004685375607988577",
            "extra": "mean: 164.72232414492626 usec\nrounds: 2104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6027.197113117236,
            "unit": "iter/sec",
            "range": "stddev: 0.000046968554549710224",
            "extra": "mean: 165.91460030793735 usec\nrounds: 3250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 515.7694163126505,
            "unit": "iter/sec",
            "range": "stddev: 0.00002935106343236746",
            "extra": "mean: 1.9388509057966656 msec\nrounds: 414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.1135385499148,
            "unit": "iter/sec",
            "range": "stddev: 0.001063904283566828",
            "extra": "mean: 11.612575871799308 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.06913726300066,
            "unit": "iter/sec",
            "range": "stddev: 0.00025241988816266037",
            "extra": "mean: 11.354715523256488 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.47507863897923,
            "unit": "iter/sec",
            "range": "stddev: 0.00011105611633059044",
            "extra": "mean: 6.874029623188365 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2626987982953684,
            "unit": "iter/sec",
            "range": "stddev: 0.0012911368371608897",
            "extra": "mean: 441.9501175999926 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 159.02732032704142,
            "unit": "iter/sec",
            "range": "stddev: 0.000727345457529733",
            "extra": "mean: 6.288227695363847 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5727.112395919618,
            "unit": "iter/sec",
            "range": "stddev: 0.00005438390858031255",
            "extra": "mean: 174.60806264470514 usec\nrounds: 2155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7529179184853064,
            "unit": "iter/sec",
            "range": "stddev: 0.0035070375653843966",
            "extra": "mean: 1.3281660264000152 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5099.404855338127,
            "unit": "iter/sec",
            "range": "stddev: 0.000050609717375672845",
            "extra": "mean: 196.10131542177635 usec\nrounds: 1861"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 206.76953267746882,
            "unit": "iter/sec",
            "range": "stddev: 0.010869287031099562",
            "extra": "mean: 4.836302462219414 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1459.9167111667498,
            "unit": "iter/sec",
            "range": "stddev: 0.000009131546010457121",
            "extra": "mean: 684.970582466181 usec\nrounds: 1152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 247.79657041875748,
            "unit": "iter/sec",
            "range": "stddev: 0.000237033515595269",
            "extra": "mean: 4.035568362831154 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11374048.84411809,
            "unit": "iter/sec",
            "range": "stddev: 4.574873393580587e-9",
            "extra": "mean: 87.9194395685942 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.46733734130171,
            "unit": "iter/sec",
            "range": "stddev: 0.0006306259866109656",
            "extra": "mean: 26.68991369444503 msec\nrounds: 36"
          }
        ]
      }
    ]
  }
}