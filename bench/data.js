window.BENCHMARK_DATA = {
  "lastUpdate": 1682209697133,
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
          "id": "5a49d44529c519288d306422f3556d61af10b0bc",
          "message": "chore(flake/poetry2nix): `0311feba` -> `e2d2c7a3`",
          "timestamp": "2023-04-23T00:22:43Z",
          "tree_id": "51498375705a58a97e069bd51ba93b41b9baaaa6",
          "url": "https://github.com/ibis-project/ibis/commit/5a49d44529c519288d306422f3556d61af10b0bc"
        },
        "date": 1682209611135,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1843343.2419854323,
            "unit": "iter/sec",
            "range": "stddev: 1.1131927973039291e-7",
            "extra": "mean: 542.4925630903758 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1766.3828030622788,
            "unit": "iter/sec",
            "range": "stddev: 0.00001938140337628627",
            "extra": "mean: 566.1286999999978 usec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2275.9048108789343,
            "unit": "iter/sec",
            "range": "stddev: 0.00009211644744006556",
            "extra": "mean: 439.3856874944646 usec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 113.51875047088924,
            "unit": "iter/sec",
            "range": "stddev: 0.00032911435107735776",
            "extra": "mean: 8.809117400005562 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 243.3138828280023,
            "unit": "iter/sec",
            "range": "stddev: 0.005985218726493459",
            "extra": "mean: 4.109917561534688 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.40403226596013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000747993461539469",
            "extra": "mean: 6.082575872483939 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.462399337745264,
            "unit": "iter/sec",
            "range": "stddev: 0.0003383373856092816",
            "extra": "mean: 35.13407243478083 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 102.99104252092096,
            "unit": "iter/sec",
            "range": "stddev: 0.0005940921686784806",
            "extra": "mean: 9.709582265825363 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9399108659667215,
            "unit": "iter/sec",
            "range": "stddev: 0.004024487074815992",
            "extra": "mean: 1.063930672799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 273.47508251340616,
            "unit": "iter/sec",
            "range": "stddev: 0.000283343199572584",
            "extra": "mean: 3.656640271608579 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.82013043447222,
            "unit": "iter/sec",
            "range": "stddev: 0.00007234754906435814",
            "extra": "mean: 6.257034062489453 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2374.8826528446534,
            "unit": "iter/sec",
            "range": "stddev: 0.00007712664554131641",
            "extra": "mean: 421.07343653472395 usec\nrounds: 1489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 97.6303926853043,
            "unit": "iter/sec",
            "range": "stddev: 0.0006311890461464774",
            "extra": "mean: 10.242712054056133 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 639.0503777553504,
            "unit": "iter/sec",
            "range": "stddev: 0.010254553581327886",
            "extra": "mean: 1.5648218588219553 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 96.7850282680768,
            "unit": "iter/sec",
            "range": "stddev: 0.0006037133616039012",
            "extra": "mean: 10.332176555553438 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.54676662145968,
            "unit": "iter/sec",
            "range": "stddev: 0.00014746573734658507",
            "extra": "mean: 18.0028480652133 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1619082.3541053983,
            "unit": "iter/sec",
            "range": "stddev: 8.139647496942416e-8",
            "extra": "mean: 617.6338081039344 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13731.38457372758,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016341651878048985",
            "extra": "mean: 72.8258679691567 usec\nrounds: 6703"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18300525076762245,
            "unit": "iter/sec",
            "range": "stddev: 0.10613202763842651",
            "extra": "mean: 5.464324088000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7729.8316796914405,
            "unit": "iter/sec",
            "range": "stddev: 0.00001581357931897511",
            "extra": "mean: 129.36892308111916 usec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.07639733611251,
            "unit": "iter/sec",
            "range": "stddev: 0.0006379611605602525",
            "extra": "mean: 21.242067290329707 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 102.62613351090894,
            "unit": "iter/sec",
            "range": "stddev: 0.0006247929426186129",
            "extra": "mean: 9.744106747368612 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.94317538858326,
            "unit": "iter/sec",
            "range": "stddev: 0.0000886628947131637",
            "extra": "mean: 6.252220500002529 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11772.203293000835,
            "unit": "iter/sec",
            "range": "stddev: 0.000013052464209651148",
            "extra": "mean: 84.94586570676623 usec\nrounds: 7640"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 736085.3238634749,
            "unit": "iter/sec",
            "range": "stddev: 1.1999435262462932e-7",
            "extra": "mean: 1.3585381579832647 usec\nrounds: 23311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 693.0851607425227,
            "unit": "iter/sec",
            "range": "stddev: 0.000019275293863619288",
            "extra": "mean: 1.4428241385642573 msec\nrounds: 599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.12665725763987,
            "unit": "iter/sec",
            "range": "stddev: 0.00009333115418181939",
            "extra": "mean: 62.009130846149674 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5830115.870582103,
            "unit": "iter/sec",
            "range": "stddev: 4.194629219016382e-8",
            "extra": "mean: 171.52317761784994 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 181.94384107891202,
            "unit": "iter/sec",
            "range": "stddev: 0.003812661584924042",
            "extra": "mean: 5.496201432651318 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.65511887249204,
            "unit": "iter/sec",
            "range": "stddev: 0.00006884157348610442",
            "extra": "mean: 8.427786424238551 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2427.1989061830486,
            "unit": "iter/sec",
            "range": "stddev: 0.000077837090638919",
            "extra": "mean: 411.99754888344717 usec\nrounds: 1432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.33473428947644,
            "unit": "iter/sec",
            "range": "stddev: 0.013027375567535665",
            "extra": "mean: 11.718557611110075 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 511224.76042033755,
            "unit": "iter/sec",
            "range": "stddev: 3.4876045721828867e-7",
            "extra": "mean: 1.9560867888671574 usec\nrounds: 2074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4677.429828403527,
            "unit": "iter/sec",
            "range": "stddev: 0.000027940727913067513",
            "extra": "mean: 213.79262472897736 usec\nrounds: 922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.36089816327325,
            "unit": "iter/sec",
            "range": "stddev: 0.00010137872882185687",
            "extra": "mean: 13.095707673079241 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.99510901700197,
            "unit": "iter/sec",
            "range": "stddev: 0.00005249677307069336",
            "extra": "mean: 10.000489122222689 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9294336505196208,
            "unit": "iter/sec",
            "range": "stddev: 0.0020283270729022987",
            "extra": "mean: 1.0759240311999974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2331.244702323748,
            "unit": "iter/sec",
            "range": "stddev: 0.00008453539315601861",
            "extra": "mean: 428.9553983771913 usec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7964680614892784,
            "unit": "iter/sec",
            "range": "stddev: 0.0031171063626291725",
            "extra": "mean: 1.255543126400005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7288390.541857157,
            "unit": "iter/sec",
            "range": "stddev: 3.958876186847903e-9",
            "extra": "mean: 137.20450273037727 nsec\nrounds: 71943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.46825757632298,
            "unit": "iter/sec",
            "range": "stddev: 0.0007475677164410155",
            "extra": "mean: 9.855298828284445 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 85.60989714306216,
            "unit": "iter/sec",
            "range": "stddev: 0.012098916794418204",
            "extra": "mean: 11.680892436173663 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.79224870668509,
            "unit": "iter/sec",
            "range": "stddev: 0.0007597596414978668",
            "extra": "mean: 9.823930728571538 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 267.5000571094393,
            "unit": "iter/sec",
            "range": "stddev: 0.004121385645411816",
            "extra": "mean: 3.7383169589039795 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6652809453151225,
            "unit": "iter/sec",
            "range": "stddev: 0.0014293627889701269",
            "extra": "mean: 600.4992748000063 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.51888477728468,
            "unit": "iter/sec",
            "range": "stddev: 0.0006381568764561023",
            "extra": "mean: 10.150338204300992 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6359174.928715985,
            "unit": "iter/sec",
            "range": "stddev: 7.510214610940724e-9",
            "extra": "mean: 157.25310456324263 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.2176137427691,
            "unit": "iter/sec",
            "range": "stddev: 0.000020338520460975764",
            "extra": "mean: 1.8408828703288915 msec\nrounds: 455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1199.0879545151588,
            "unit": "iter/sec",
            "range": "stddev: 0.000015423435990427102",
            "extra": "mean: 833.9671800008546 usec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.42945340757669,
            "unit": "iter/sec",
            "range": "stddev: 0.0006400249615831289",
            "extra": "mean: 10.478945066666432 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 246.4085256939187,
            "unit": "iter/sec",
            "range": "stddev: 0.008036925141247245",
            "extra": "mean: 4.05830113704008 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1821481.6615493079,
            "unit": "iter/sec",
            "range": "stddev: 9.223909382898191e-8",
            "extra": "mean: 549.0036057510589 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.30070206214211,
            "unit": "iter/sec",
            "range": "stddev: 0.0006699618476469513",
            "extra": "mean: 10.277418135804814 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2540696.4715999286,
            "unit": "iter/sec",
            "range": "stddev: 1.5502604989557877e-8",
            "extra": "mean: 393.5928636803085 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.72804913392982,
            "unit": "iter/sec",
            "range": "stddev: 0.00005955804035862734",
            "extra": "mean: 9.031135361108564 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.75144381238982,
            "unit": "iter/sec",
            "range": "stddev: 0.0007070720523996848",
            "extra": "mean: 10.126434221051209 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.518032944803954,
            "unit": "iter/sec",
            "range": "stddev: 0.000304441742935111",
            "extra": "mean: 86.82038025000811 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.38998235227615,
            "unit": "iter/sec",
            "range": "stddev: 0.000282448104001449",
            "extra": "mean: 3.605032854899687 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 269.37671477991273,
            "unit": "iter/sec",
            "range": "stddev: 0.00031310542595225236",
            "extra": "mean: 3.7122733522718327 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 98.90851282779036,
            "unit": "iter/sec",
            "range": "stddev: 0.0007403693620639092",
            "extra": "mean: 10.110353208334052 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9874.210649976634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017485074120986875",
            "extra": "mean: 101.27391803236104 usec\nrounds: 5978"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.823895374387609,
            "unit": "iter/sec",
            "range": "stddev: 0.0002275661340096271",
            "extra": "mean: 171.70638133332736 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 738.1118647757712,
            "unit": "iter/sec",
            "range": "stddev: 0.000011145982254627698",
            "extra": "mean: 1.3548081906308158 msec\nrounds: 619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12792608.573904838,
            "unit": "iter/sec",
            "range": "stddev: 3.297042862182907e-9",
            "extra": "mean: 78.17013975080265 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 374.0581492094624,
            "unit": "iter/sec",
            "range": "stddev: 0.0000735584747697478",
            "extra": "mean: 2.6733811363645152 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.24057545367658,
            "unit": "iter/sec",
            "range": "stddev: 0.0007517791562413953",
            "extra": "mean: 10.390627812500242 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5628714723620827,
            "unit": "iter/sec",
            "range": "stddev: 0.0013828994693472567",
            "extra": "mean: 390.1873390000105 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.58349696395602,
            "unit": "iter/sec",
            "range": "stddev: 0.028218097321587355",
            "extra": "mean: 28.102915264706578 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2459.2696454094844,
            "unit": "iter/sec",
            "range": "stddev: 0.00007625169859996008",
            "extra": "mean: 406.62478873214144 usec\nrounds: 1420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140604.59493596214,
            "unit": "iter/sec",
            "range": "stddev: 3.211573097778296e-7",
            "extra": "mean: 7.112143102118721 usec\nrounds: 38462"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.12363985106238,
            "unit": "iter/sec",
            "range": "stddev: 0.0008212849163981183",
            "extra": "mean: 9.987651282829281 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 248.81532008249002,
            "unit": "iter/sec",
            "range": "stddev: 0.00041078182387526953",
            "extra": "mean: 4.019045128203797 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.724108397694192,
            "unit": "iter/sec",
            "range": "stddev: 0.0019802678221452577",
            "extra": "mean: 1.3810087042000077 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 305.4044506736845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000394327697323474",
            "extra": "mean: 3.274346519162126 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.54900451564409,
            "unit": "iter/sec",
            "range": "stddev: 0.00011539968744341884",
            "extra": "mean: 14.588103898310916 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2323.965176002247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000850795506946295",
            "extra": "mean: 430.2990467870217 usec\nrounds: 1432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.1575527798192,
            "unit": "iter/sec",
            "range": "stddev: 0.00024757999419873494",
            "extra": "mean: 3.595084835936735 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.10159590292506,
            "unit": "iter/sec",
            "range": "stddev: 0.0005283352078994346",
            "extra": "mean: 22.674916395342382 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 131.6520724135847,
            "unit": "iter/sec",
            "range": "stddev: 0.00016229723892155967",
            "extra": "mean: 7.5957786434117205 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 267.7970522306714,
            "unit": "iter/sec",
            "range": "stddev: 0.00023476214454598704",
            "extra": "mean: 3.734171051063824 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.92974608997932,
            "unit": "iter/sec",
            "range": "stddev: 0.0002782769683047655",
            "extra": "mean: 16.68620451851384 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.22797039731381,
            "unit": "iter/sec",
            "range": "stddev: 0.00005739033029991124",
            "extra": "mean: 9.413716521739053 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.56561908742884,
            "unit": "iter/sec",
            "range": "stddev: 0.00003412899919321195",
            "extra": "mean: 5.010883159999139 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.89793641935891,
            "unit": "iter/sec",
            "range": "stddev: 0.0005707958473177591",
            "extra": "mean: 11.248855038464475 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68762.0294757187,
            "unit": "iter/sec",
            "range": "stddev: 4.780059257409229e-7",
            "extra": "mean: 14.542909911539493 usec\nrounds: 14286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 104.20237613870287,
            "unit": "iter/sec",
            "range": "stddev: 0.00103180827773964",
            "extra": "mean: 9.596710142856136 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.69748306714748,
            "unit": "iter/sec",
            "range": "stddev: 0.00015572489425909377",
            "extra": "mean: 20.121743361708596 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2381.737471744398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000788379728247041",
            "extra": "mean: 419.8615556346747 usec\nrounds: 1393"
          }
        ]
      }
    ]
  }
}