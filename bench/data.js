window.BENCHMARK_DATA = {
  "lastUpdate": 1678918962899,
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
          "id": "833c6989a4ff8f3a7baeab9a326d399f2edf2e96",
          "message": "feat(api): make create_table uniform\n\nThis commit addresses most outstanding DDL API discrepancy issues including:\n\n- `create_table`/`create_view` for pandas, dask and polars\n- making the various DDL APIs as uniform as possible (see clickhouse for\n  an example of divergence)\n- deprecation of `load_data` (except on impala, since it's significantly\n  different from the others)\n- add clickhouse implementations of `create_table`/`create_view`/`create_database`\n- standardization of APIs for creating tables\n\nDuring the process of getting all of this to work, I uncovered multiple\nissues with `snowflake-sqlalchemy`'s quoting behavior and had to monkey\npatch in `normalize_name` to avoid the broken heuristic they are using.\n\nAdditionally, to avoid having to solve the \"which case should I use?\"\nproblem in multiple places, I decided to remove our backend-scoped\nuse of `sqlalchemy.MetaData`. Without removing it, we'd have to deal\nwith identifiers' case not matching. It's possible there's a performance\nhit, but removing this maintenance burden until someone comes along\nsaying it's slow is worth it IMO.\n\nBREAKING CHANGE: Snowflake identifiers are now kept **as is** from the database. Many table names and column names may now be in SHOUTING CASE. Adjust code accordingly.",
          "timestamp": "2023-03-15T18:12:16-04:00",
          "tree_id": "e6b409f0b3bd0dd2c12db7030183d275d0b48a9b",
          "url": "https://github.com/ibis-project/ibis/commit/833c6989a4ff8f3a7baeab9a326d399f2edf2e96"
        },
        "date": 1678918884602,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 156.11474977167114,
            "unit": "iter/sec",
            "range": "stddev: 0.0038437303387685064",
            "extra": "mean: 6.40554464880846 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 325.17865965918025,
            "unit": "iter/sec",
            "range": "stddev: 0.00019086449487811096",
            "extra": "mean: 3.075232553846245 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5289.249850579701,
            "unit": "iter/sec",
            "range": "stddev: 0.00004796470185218437",
            "extra": "mean: 189.06272689886262 usec\nrounds: 1948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.6431626028472,
            "unit": "iter/sec",
            "range": "stddev: 0.00009012537256357633",
            "extra": "mean: 6.073741442954442 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 305.4749822862611,
            "unit": "iter/sec",
            "range": "stddev: 0.00018402649684622806",
            "extra": "mean: 3.2735905000000898 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9036329387035537,
            "unit": "iter/sec",
            "range": "stddev: 0.007440671923293263",
            "extra": "mean: 1.106644033400005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.25175106519224,
            "unit": "iter/sec",
            "range": "stddev: 0.0006269558695374533",
            "extra": "mean: 8.247303574711593 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5261.53541726441,
            "unit": "iter/sec",
            "range": "stddev: 0.00006274578707808959",
            "extra": "mean: 190.0585894981816 usec\nrounds: 2609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.7246813549163,
            "unit": "iter/sec",
            "range": "stddev: 0.000692360391878283",
            "extra": "mean: 9.734758840915509 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 317.1355935330528,
            "unit": "iter/sec",
            "range": "stddev: 0.00029124300865169585",
            "extra": "mean: 3.1532253723383366 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.96434966075026,
            "unit": "iter/sec",
            "range": "stddev: 0.0001751102403759984",
            "extra": "mean: 6.370873399987431 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6056325.016685829,
            "unit": "iter/sec",
            "range": "stddev: 1.2893363583009487e-8",
            "extra": "mean: 165.11663380741032 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.35443258986318,
            "unit": "iter/sec",
            "range": "stddev: 0.0006990173864284782",
            "extra": "mean: 8.378406886959056 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.3040787597905,
            "unit": "iter/sec",
            "range": "stddev: 0.0050207421354599956",
            "extra": "mean: 97.04894763637579 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.16683919523023,
            "unit": "iter/sec",
            "range": "stddev: 0.0005792629153373129",
            "extra": "mean: 18.461479659091072 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.29452214811171,
            "unit": "iter/sec",
            "range": "stddev: 0.0006698097810036306",
            "extra": "mean: 8.749325700002686 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5229.618539437628,
            "unit": "iter/sec",
            "range": "stddev: 0.00005165865460458979",
            "extra": "mean: 191.21853581839565 usec\nrounds: 2736"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5638.327994892504,
            "unit": "iter/sec",
            "range": "stddev: 0.00005106663456697184",
            "extra": "mean: 177.35754303507227 usec\nrounds: 2893"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1172.5535480925569,
            "unit": "iter/sec",
            "range": "stddev: 0.00001225098469870996",
            "extra": "mean: 852.8395156253143 usec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.5369914835625,
            "unit": "iter/sec",
            "range": "stddev: 0.00021468560797866423",
            "extra": "mean: 3.220228273683564 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.3849539675858,
            "unit": "iter/sec",
            "range": "stddev: 0.00030446324276823774",
            "extra": "mean: 3.504038969460109 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 680.1135397248404,
            "unit": "iter/sec",
            "range": "stddev: 0.000019846364486918494",
            "extra": "mean: 1.4703427318982343 msec\nrounds: 511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.62961383921433,
            "unit": "iter/sec",
            "range": "stddev: 0.0006340593800473437",
            "extra": "mean: 9.64975129166786 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2705884.5444294447,
            "unit": "iter/sec",
            "range": "stddev: 2.9005907991647665e-8",
            "extra": "mean: 369.5649180814861 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 316.64231845734264,
            "unit": "iter/sec",
            "range": "stddev: 0.00020674340140990817",
            "extra": "mean: 3.158137563140404 msec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.0832148811257,
            "unit": "iter/sec",
            "range": "stddev: 0.0007539629179869838",
            "extra": "mean: 9.338531730767622 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2694459.9125194615,
            "unit": "iter/sec",
            "range": "stddev: 1.7025713572987224e-8",
            "extra": "mean: 371.1318900512139 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5347.778957064095,
            "unit": "iter/sec",
            "range": "stddev: 0.00010998790686551",
            "extra": "mean: 186.99351787512833 usec\nrounds: 2014"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7957.325856110245,
            "unit": "iter/sec",
            "range": "stddev: 0.000013855995978008399",
            "extra": "mean: 125.67035937482984 usec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7064735.899293004,
            "unit": "iter/sec",
            "range": "stddev: 4.789669352201256e-9",
            "extra": "mean: 141.5481079908668 nsec\nrounds: 59524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8977743538323724,
            "unit": "iter/sec",
            "range": "stddev: 0.005405427286603389",
            "extra": "mean: 1.1138656342000104 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 84.10901493522452,
            "unit": "iter/sec",
            "range": "stddev: 0.01879275092116673",
            "extra": "mean: 11.889331967211092 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 287.7001251630581,
            "unit": "iter/sec",
            "range": "stddev: 0.000041940880951427416",
            "extra": "mean: 3.4758413797464836 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 61.668102891573845,
            "unit": "iter/sec",
            "range": "stddev: 0.00032248789121406944",
            "extra": "mean: 16.215838547169533 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 288.2637639793746,
            "unit": "iter/sec",
            "range": "stddev: 0.00008046927547093308",
            "extra": "mean: 3.4690451071455186 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6789919714686976,
            "unit": "iter/sec",
            "range": "stddev: 0.00930614637003957",
            "extra": "mean: 1.4727714642000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.4124273495534,
            "unit": "iter/sec",
            "range": "stddev: 0.00009054550294800228",
            "extra": "mean: 8.44505954639373 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.2960693004517,
            "unit": "iter/sec",
            "range": "stddev: 0.0007314164812341155",
            "extra": "mean: 9.32000591000019 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.092056758539165,
            "unit": "iter/sec",
            "range": "stddev: 0.0008512193003988561",
            "extra": "mean: 17.21405740816719 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1749.8154447302602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070452244164313096",
            "extra": "mean: 571.4888407298024 usec\nrounds: 1262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1957402.6722501076,
            "unit": "iter/sec",
            "range": "stddev: 8.874325557059432e-8",
            "extra": "mean: 510.8810844988081 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.8080801501725,
            "unit": "iter/sec",
            "range": "stddev: 0.000026561920266593586",
            "extra": "mean: 5.1070415441133115 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 481084.54603874625,
            "unit": "iter/sec",
            "range": "stddev: 3.6446621658436625e-7",
            "extra": "mean: 2.078636714136855 usec\nrounds: 2081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.27576488699855,
            "unit": "iter/sec",
            "range": "stddev: 0.030247598885460403",
            "extra": "mean: 33.02971877778831 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.55549255074683,
            "unit": "iter/sec",
            "range": "stddev: 0.0004209059470019089",
            "extra": "mean: 11.826552833334155 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.4126036758871,
            "unit": "iter/sec",
            "range": "stddev: 0.0008619104807073539",
            "extra": "mean: 10.939410538459272 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 313.0970147548653,
            "unit": "iter/sec",
            "range": "stddev: 0.0002224628354352933",
            "extra": "mean: 3.1938982260272755 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.225540025780608,
            "unit": "iter/sec",
            "range": "stddev: 0.0005884328180748518",
            "extra": "mean: 65.67911537500493 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.8748135360213,
            "unit": "iter/sec",
            "range": "stddev: 0.0004190819197231399",
            "extra": "mean: 7.525880739835681 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.50551161211952,
            "unit": "iter/sec",
            "range": "stddev: 0.029111540528965214",
            "extra": "mean: 32.78096144444634 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.18395287947861,
            "unit": "iter/sec",
            "range": "stddev: 0.00006095228221311415",
            "extra": "mean: 8.994103682246141 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.04608878862398,
            "unit": "iter/sec",
            "range": "stddev: 0.0009176794120131568",
            "extra": "mean: 41.58680477272014 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.73487867111692,
            "unit": "iter/sec",
            "range": "stddev: 0.0007157083175291318",
            "extra": "mean: 8.94975688785078 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5569.683838227257,
            "unit": "iter/sec",
            "range": "stddev: 0.00006446417138396632",
            "extra": "mean: 179.54340480451478 usec\nrounds: 3288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.607295263094078,
            "unit": "iter/sec",
            "range": "stddev: 0.00027454802423832256",
            "extra": "mean: 178.33910166667502 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.6750619288175,
            "unit": "iter/sec",
            "range": "stddev: 0.00017274648404301855",
            "extra": "mean: 10.134272839082513 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.56646079877869,
            "unit": "iter/sec",
            "range": "stddev: 0.0007539374772960386",
            "extra": "mean: 8.434088301725717 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8478605990226706,
            "unit": "iter/sec",
            "range": "stddev: 0.0019792092892417716",
            "extra": "mean: 1.179439168600004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 523.0414563834053,
            "unit": "iter/sec",
            "range": "stddev: 0.00042679188231763734",
            "extra": "mean: 1.9118943399143673 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.28322395790484,
            "unit": "iter/sec",
            "range": "stddev: 0.00011215844925736341",
            "extra": "mean: 13.283171833331119 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5627.741588259915,
            "unit": "iter/sec",
            "range": "stddev: 0.00004841762886325521",
            "extra": "mean: 177.6911722610202 usec\nrounds: 2026"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.50300221218086,
            "unit": "iter/sec",
            "range": "stddev: 0.0007644064130081846",
            "extra": "mean: 8.367990606834066 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12825.5022840005,
            "unit": "iter/sec",
            "range": "stddev: 0.000003398273558124628",
            "extra": "mean: 77.9696559133965 usec\nrounds: 5394"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.09411307134407,
            "unit": "iter/sec",
            "range": "stddev: 0.0007922404939955213",
            "extra": "mean: 8.467822603450784 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 740.2413104933831,
            "unit": "iter/sec",
            "range": "stddev: 0.00008726664023772712",
            "extra": "mean: 1.3509108257326023 msec\nrounds: 614"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.166461672512785,
            "unit": "iter/sec",
            "range": "stddev: 0.07238970016186776",
            "extra": "mean: 6.00738887760001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74878.21692100352,
            "unit": "iter/sec",
            "range": "stddev: 7.398691505430941e-7",
            "extra": "mean: 13.355018870908738 usec\nrounds: 13089"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 336.72236149742696,
            "unit": "iter/sec",
            "range": "stddev: 0.000013629876173112344",
            "extra": "mean: 2.9698057341749826 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.264298950018,
            "unit": "iter/sec",
            "range": "stddev: 0.00005358065697299165",
            "extra": "mean: 6.162785076389652 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5589824.6483802665,
            "unit": "iter/sec",
            "range": "stddev: 1.018031174142814e-8",
            "extra": "mean: 178.89648833441984 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.18125021156744,
            "unit": "iter/sec",
            "range": "stddev: 0.0006254774428767523",
            "extra": "mean: 9.243746010000109 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 751872.2385376947,
            "unit": "iter/sec",
            "range": "stddev: 2.021452225364492e-7",
            "extra": "mean: 1.330013197381626 usec\nrounds: 26596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 298.42805190331694,
            "unit": "iter/sec",
            "range": "stddev: 0.00029760231376231236",
            "extra": "mean: 3.3508914246572714 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 220.15235437996475,
            "unit": "iter/sec",
            "range": "stddev: 0.004070375551535324",
            "extra": "mean: 4.542308906104555 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11993087.379342353,
            "unit": "iter/sec",
            "range": "stddev: 5.01969816958557e-9",
            "extra": "mean: 83.38136531231027 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12226.934938189548,
            "unit": "iter/sec",
            "range": "stddev: 0.000011962298213139687",
            "extra": "mean: 81.78664604459496 usec\nrounds: 3944"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.10930814200502,
            "unit": "iter/sec",
            "range": "stddev: 0.0007879043237426183",
            "extra": "mean: 9.793426458333107 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7591007697526388,
            "unit": "iter/sec",
            "range": "stddev: 0.0022382746846237147",
            "extra": "mean: 568.4722656000076 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149524.70226904293,
            "unit": "iter/sec",
            "range": "stddev: 3.3052845096304853e-7",
            "extra": "mean: 6.687858158718678 usec\nrounds: 42195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1705004.0358619497,
            "unit": "iter/sec",
            "range": "stddev: 9.034801747670492e-8",
            "extra": "mean: 586.5088756194403 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13902.989827781055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018297320870415297",
            "extra": "mean: 71.92697487282862 usec\nrounds: 5492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.17274149396882,
            "unit": "iter/sec",
            "range": "stddev: 0.0010058618138869026",
            "extra": "mean: 24.892500805555702 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.69762048494005,
            "unit": "iter/sec",
            "range": "stddev: 0.000740168496053131",
            "extra": "mean: 8.354384957266687 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5270.224990070586,
            "unit": "iter/sec",
            "range": "stddev: 0.00005815099277158577",
            "extra": "mean: 189.74521996386474 usec\nrounds: 3246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.731125748502706,
            "unit": "iter/sec",
            "range": "stddev: 0.0004783556958145758",
            "extra": "mean: 21.399013697675382 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.27042598591791,
            "unit": "iter/sec",
            "range": "stddev: 0.0003824814754737214",
            "extra": "mean: 10.496436744680997 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5105.325571637761,
            "unit": "iter/sec",
            "range": "stddev: 0.000022606718701042635",
            "extra": "mean: 195.87389402850667 usec\nrounds: 2227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.526399926782172,
            "unit": "iter/sec",
            "range": "stddev: 0.0018563486363539288",
            "extra": "mean: 395.8201507999888 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}