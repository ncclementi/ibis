window.BENCHMARK_DATA = {
  "lastUpdate": 1681244442630,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "18dd663a32ca1659eb94101867684cb5fc753a31",
          "message": "test(datafusion): enable xpassing test case for nullable time literal",
          "timestamp": "2023-04-11T21:47:21+02:00",
          "tree_id": "2df4ea9850bd998b891ba843d8175e5051242e9f",
          "url": "https://github.com/ibis-project/ibis/commit/18dd663a32ca1659eb94101867684cb5fc753a31"
        },
        "date": 1681242831844,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1797.2791623528335,
            "unit": "iter/sec",
            "range": "stddev: 0.00012826691044985766",
            "extra": "mean: 556.3965915516939 usec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7132400915750354,
            "unit": "iter/sec",
            "range": "stddev: 0.0016922128657323398",
            "extra": "mean: 1.4020524249999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.75221996764706,
            "unit": "iter/sec",
            "range": "stddev: 0.00010679856051153824",
            "extra": "mean: 15.443485960784699 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 171.70547324518427,
            "unit": "iter/sec",
            "range": "stddev: 0.00462504322380434",
            "extra": "mean: 5.823926174863773 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.92388369014148,
            "unit": "iter/sec",
            "range": "stddev: 0.0008563607914836687",
            "extra": "mean: 12.511904499998026 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6980.151964874457,
            "unit": "iter/sec",
            "range": "stddev: 0.000016688603521714202",
            "extra": "mean: 143.26335659054465 usec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 233.91748513924944,
            "unit": "iter/sec",
            "range": "stddev: 0.0004378516806121573",
            "extra": "mean: 4.275011760684358 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 628.1584364890206,
            "unit": "iter/sec",
            "range": "stddev: 0.000059096543788346266",
            "extra": "mean: 1.5919550576910524 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.537370063503573,
            "unit": "iter/sec",
            "range": "stddev: 0.0008170190146313236",
            "extra": "mean: 48.691726199990626 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 78.27824518893651,
            "unit": "iter/sec",
            "range": "stddev: 0.0009967056130441966",
            "extra": "mean: 12.774941461530558 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 129.37315970581773,
            "unit": "iter/sec",
            "range": "stddev: 0.0002031088321459793",
            "extra": "mean: 7.729578548393693 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.62727080379258,
            "unit": "iter/sec",
            "range": "stddev: 0.00009654043340397041",
            "extra": "mean: 7.16192470312782 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1620502.5983493142,
            "unit": "iter/sec",
            "range": "stddev: 2.467098709672327e-7",
            "extra": "mean: 617.092500202484 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 82.08977104022074,
            "unit": "iter/sec",
            "range": "stddev: 0.0010817976570730561",
            "extra": "mean: 12.181785712498083 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4576677.451217439,
            "unit": "iter/sec",
            "range": "stddev: 1.6061803862316947e-8",
            "extra": "mean: 218.4991209583903 nsec\nrounds: 188644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 430939.7379423711,
            "unit": "iter/sec",
            "range": "stddev: 4.4944909759120464e-7",
            "extra": "mean: 2.320510066615691 usec\nrounds: 1788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 240.54000256603646,
            "unit": "iter/sec",
            "range": "stddev: 0.00006359751385710186",
            "extra": "mean: 4.15731266871283 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5915296.043932103,
            "unit": "iter/sec",
            "range": "stddev: 8.209377447607803e-9",
            "extra": "mean: 169.05324646028313 nsec\nrounds: 54946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 218.40545252483372,
            "unit": "iter/sec",
            "range": "stddev: 0.00025522912017168114",
            "extra": "mean: 4.578640269460742 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 230.46469467141432,
            "unit": "iter/sec",
            "range": "stddev: 0.00034263620272316194",
            "extra": "mean: 4.33905940094535 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 135.22137761368108,
            "unit": "iter/sec",
            "range": "stddev: 0.00016165722096681215",
            "extra": "mean: 7.395280373913485 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 62743.87088962123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012214420998855969",
            "extra": "mean: 15.937811706886814 usec\nrounds: 11429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 81.85177798876477,
            "unit": "iter/sec",
            "range": "stddev: 0.0009676704785077694",
            "extra": "mean: 12.21720559493849 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 51.06774159872161,
            "unit": "iter/sec",
            "range": "stddev: 0.03136894792686817",
            "extra": "mean: 19.581833241379 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 83.02409851914689,
            "unit": "iter/sec",
            "range": "stddev: 0.0010030778739813942",
            "extra": "mean: 12.044695670732054 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 237.2817623009722,
            "unit": "iter/sec",
            "range": "stddev: 0.00040937168597320967",
            "extra": "mean: 4.214398908296977 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 983.7560250259625,
            "unit": "iter/sec",
            "range": "stddev: 0.00001750481491727062",
            "extra": "mean: 1.016512198716759 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 567.325327124207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000320647192351601",
            "extra": "mean: 1.7626570720349062 msec\nrounds: 472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 446.13425583501885,
            "unit": "iter/sec",
            "range": "stddev: 0.00004639860387470324",
            "extra": "mean: 2.2414777321421413 msec\nrounds: 392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.1350830707275,
            "unit": "iter/sec",
            "range": "stddev: 0.0006431707668198082",
            "extra": "mean: 27.673936657145404 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 66.59093119134687,
            "unit": "iter/sec",
            "range": "stddev: 0.026203435469946655",
            "extra": "mean: 15.017059862498883 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.648789513281862,
            "unit": "iter/sec",
            "range": "stddev: 0.0006085823211993314",
            "extra": "mean: 103.6399435000078 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1462217.2089212174,
            "unit": "iter/sec",
            "range": "stddev: 2.990333264472866e-7",
            "extra": "mean: 683.892922268212 nsec\nrounds: 96145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.16788112293547,
            "unit": "iter/sec",
            "range": "stddev: 0.00028408601853289073",
            "extra": "mean: 16.085476647057092 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 258.7292197057492,
            "unit": "iter/sec",
            "range": "stddev: 0.00010315950379120124",
            "extra": "mean: 3.8650447024781065 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1904.6292462704162,
            "unit": "iter/sec",
            "range": "stddev: 0.00009551480286642683",
            "extra": "mean: 525.0365665434193 usec\nrounds: 1082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12180.349372496501,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019653932211939936",
            "extra": "mean: 82.09945128979817 usec\nrounds: 6087"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10460.47753644975,
            "unit": "iter/sec",
            "range": "stddev: 0.000014129006785585636",
            "extra": "mean: 95.5979300672918 usec\nrounds: 3246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 231.09274820009637,
            "unit": "iter/sec",
            "range": "stddev: 0.00043629092753790394",
            "extra": "mean: 4.3272668994966885 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 95.23663040798733,
            "unit": "iter/sec",
            "range": "stddev: 0.00019626559544443003",
            "extra": "mean: 10.500161500003383 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1844.8153422186087,
            "unit": "iter/sec",
            "range": "stddev: 0.00010414771790043023",
            "extra": "mean: 542.0596723774976 usec\nrounds: 992"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1627570.6084782183,
            "unit": "iter/sec",
            "range": "stddev: 1.0960867807716565e-7",
            "extra": "mean: 614.4126680531556 nsec\nrounds: 111099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1783.9100088629789,
            "unit": "iter/sec",
            "range": "stddev: 0.0001347798086124084",
            "extra": "mean: 560.5663935017528 usec\nrounds: 1108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1800.674874504628,
            "unit": "iter/sec",
            "range": "stddev: 0.00010583178139801175",
            "extra": "mean: 555.347339022045 usec\nrounds: 1348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 126.72057506714002,
            "unit": "iter/sec",
            "range": "stddev: 0.004725011472562728",
            "extra": "mean: 7.891378329605691 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 82.53613787632894,
            "unit": "iter/sec",
            "range": "stddev: 0.0009146600692045419",
            "extra": "mean: 12.115904932435619 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 238.32958712522998,
            "unit": "iter/sec",
            "range": "stddev: 0.0004013595958142865",
            "extra": "mean: 4.195870147983562 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.37863221808678,
            "unit": "iter/sec",
            "range": "stddev: 0.0001395927754950473",
            "extra": "mean: 10.595618695651742 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1778.6138323950706,
            "unit": "iter/sec",
            "range": "stddev: 0.00011324821451330357",
            "extra": "mean: 562.2355914399957 usec\nrounds: 1028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 109.65572543847387,
            "unit": "iter/sec",
            "range": "stddev: 0.0005114024568123512",
            "extra": "mean: 9.119450863157022 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 82.22954313443961,
            "unit": "iter/sec",
            "range": "stddev: 0.001062617039411402",
            "extra": "mean: 12.16107936249955 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1634596.3436316885,
            "unit": "iter/sec",
            "range": "stddev: 1.3387319134331172e-7",
            "extra": "mean: 611.7718321688126 nsec\nrounds: 169463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9610523.101539662,
            "unit": "iter/sec",
            "range": "stddev: 5.30131435273e-9",
            "extra": "mean: 104.05260873254736 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 189.08408007389278,
            "unit": "iter/sec",
            "range": "stddev: 0.017359124663295058",
            "extra": "mean: 5.288652538115355 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1891.8100047564185,
            "unit": "iter/sec",
            "range": "stddev: 0.00010362698150399806",
            "extra": "mean: 528.5943078246676 usec\nrounds: 1163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.80434590207438,
            "unit": "iter/sec",
            "range": "stddev: 0.0006111872816777827",
            "extra": "mean: 22.31926345238088 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143277.53872003863,
            "unit": "iter/sec",
            "range": "stddev: 6.434999644107262e-7",
            "extra": "mean: 6.979461044162543 usec\nrounds: 30958"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1520.8903243847003,
            "unit": "iter/sec",
            "range": "stddev: 0.000017049885734917925",
            "extra": "mean: 657.5096073443464 usec\nrounds: 1062"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14170438259153773,
            "unit": "iter/sec",
            "range": "stddev: 0.16594864899789685",
            "extra": "mean: 7.056944758599991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7488686551414544,
            "unit": "iter/sec",
            "range": "stddev: 0.014237121894455204",
            "extra": "mean: 1.3353476516000113 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 637638.3844499486,
            "unit": "iter/sec",
            "range": "stddev: 3.225505475621265e-7",
            "extra": "mean: 1.5682870171980605 usec\nrounds: 21598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1921671151565003,
            "unit": "iter/sec",
            "range": "stddev: 0.003289142797375742",
            "extra": "mean: 456.16960180000206 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.100058947050904,
            "unit": "iter/sec",
            "range": "stddev: 0.0011162479452045985",
            "extra": "mean: 33.22252630000169 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.39821722561948,
            "unit": "iter/sec",
            "range": "stddev: 0.00009080182301153958",
            "extra": "mean: 5.868606000002501 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5104709.791170254,
            "unit": "iter/sec",
            "range": "stddev: 1.3621004259703481e-8",
            "extra": "mean: 195.89752227030215 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 81.98898849963832,
            "unit": "iter/sec",
            "range": "stddev: 0.0012329528918438237",
            "extra": "mean: 12.196759812501057 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 67.78026746625466,
            "unit": "iter/sec",
            "range": "stddev: 0.0003172865482972517",
            "extra": "mean: 14.753556416664537 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.77423801488636,
            "unit": "iter/sec",
            "range": "stddev: 0.00007475274571426473",
            "extra": "mean: 11.264529241380952 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.526278521067404,
            "unit": "iter/sec",
            "range": "stddev: 0.0001642632397432467",
            "extra": "mean: 73.93016478571569 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.07526410426924,
            "unit": "iter/sec",
            "range": "stddev: 0.00008635062793224179",
            "extra": "mean: 9.9924792499982 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.014088049634616,
            "unit": "iter/sec",
            "range": "stddev: 0.0011411708787418247",
            "extra": "mean: 28.55993274999591 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1816.8257470326866,
            "unit": "iter/sec",
            "range": "stddev: 0.00011985709178734819",
            "extra": "mean: 550.4105177027794 usec\nrounds: 1045"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 80.63134173028998,
            "unit": "iter/sec",
            "range": "stddev: 0.0009687993325047729",
            "extra": "mean: 12.40212525974053 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.950888561814074,
            "unit": "iter/sec",
            "range": "stddev: 0.0010177022440995634",
            "extra": "mean: 201.98394439998992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 78.14029562284668,
            "unit": "iter/sec",
            "range": "stddev: 0.0010683513014082052",
            "extra": "mean: 12.797494455698219 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 77.3148182071902,
            "unit": "iter/sec",
            "range": "stddev: 0.00030460168623679763",
            "extra": "mean: 12.934131169010508 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 60.612546711821466,
            "unit": "iter/sec",
            "range": "stddev: 0.03231226973467485",
            "extra": "mean: 16.49823434666814 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4698782050070809,
            "unit": "iter/sec",
            "range": "stddev: 0.002102208344348228",
            "extra": "mean: 680.3284765999933 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6113569157384803,
            "unit": "iter/sec",
            "range": "stddev: 0.0012997833763586867",
            "extra": "mean: 1.6357057133999433 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 79.16130521354702,
            "unit": "iter/sec",
            "range": "stddev: 0.0011101990933920496",
            "extra": "mean: 12.632434461538766 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 81.71674611217428,
            "unit": "iter/sec",
            "range": "stddev: 0.0012072172268761394",
            "extra": "mean: 12.237393772719233 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.731539671554032,
            "unit": "iter/sec",
            "range": "stddev: 0.016852394220988564",
            "extra": "mean: 1.3669798630000058 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8919.309548226945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024354631348283704",
            "extra": "mean: 112.11630167032249 usec\nrounds: 4190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 44.54021285471474,
            "unit": "iter/sec",
            "range": "stddev: 0.0013016231409613433",
            "extra": "mean: 22.451621487797773 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 79.82331571203949,
            "unit": "iter/sec",
            "range": "stddev: 0.0009843259961209603",
            "extra": "mean: 12.527668026312934 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 235.0696089466444,
            "unit": "iter/sec",
            "range": "stddev: 0.00037239809349369176",
            "extra": "mean: 4.254059061403288 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 36.78323532123085,
            "unit": "iter/sec",
            "range": "stddev: 0.0007158812501429577",
            "extra": "mean: 27.18629808571547 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3801.8149438513706,
            "unit": "iter/sec",
            "range": "stddev: 0.00003067565442138425",
            "extra": "mean: 263.0322661068204 usec\nrounds: 1661"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "6a2b8d34cb33b75e538613986233bdd347f6a87d",
          "message": "chore(deps): relock using poetry==1.3.2",
          "timestamp": "2023-04-11T21:51:27+02:00",
          "tree_id": "3fd8acb6e9e510ffb3c6df7e64e4dcee3aeac5dd",
          "url": "https://github.com/ibis-project/ibis/commit/6a2b8d34cb33b75e538613986233bdd347f6a87d"
        },
        "date": 1681243035974,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 501057.63183451944,
            "unit": "iter/sec",
            "range": "stddev: 3.3657636791842413e-7",
            "extra": "mean: 1.9957784024538368 usec\nrounds: 2315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74543.38925036004,
            "unit": "iter/sec",
            "range": "stddev: 4.2047828569500746e-7",
            "extra": "mean: 13.415005811466642 usec\nrounds: 14971"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 223.5026865641955,
            "unit": "iter/sec",
            "range": "stddev: 0.010480816898211497",
            "extra": "mean: 4.474219148648914 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2085.5168098975714,
            "unit": "iter/sec",
            "range": "stddev: 0.00009183424158008747",
            "extra": "mean: 479.4974537026696 usec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1162.8189180550946,
            "unit": "iter/sec",
            "range": "stddev: 0.00003422249073493246",
            "extra": "mean: 859.9791287129883 usec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.27513232711187,
            "unit": "iter/sec",
            "range": "stddev: 0.00015248972834337095",
            "extra": "mean: 20.714598837844893 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.96619067738365,
            "unit": "iter/sec",
            "range": "stddev: 0.00008543982490121853",
            "extra": "mean: 8.477005100002089 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.6773361923112,
            "unit": "iter/sec",
            "range": "stddev: 0.0006080656309494781",
            "extra": "mean: 10.343685908047707 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147990.5380149614,
            "unit": "iter/sec",
            "range": "stddev: 3.702665264289518e-7",
            "extra": "mean: 6.757188759587475 usec\nrounds: 34483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2098.893277350206,
            "unit": "iter/sec",
            "range": "stddev: 0.00010015070111148939",
            "extra": "mean: 476.4415660344922 usec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 285.00644753320296,
            "unit": "iter/sec",
            "range": "stddev: 0.00006276140397313113",
            "extra": "mean: 3.508692552941284 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2155.0731892212243,
            "unit": "iter/sec",
            "range": "stddev: 0.00008040905552146974",
            "extra": "mean: 464.02136363701345 usec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12144.461859236257,
            "unit": "iter/sec",
            "range": "stddev: 0.000011213890616445335",
            "extra": "mean: 82.34205941694053 usec\nrounds: 4864"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.6174760918485,
            "unit": "iter/sec",
            "range": "stddev: 0.000042089018767796605",
            "extra": "mean: 5.112017698922099 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 83.96412613333837,
            "unit": "iter/sec",
            "range": "stddev: 0.012913993431780037",
            "extra": "mean: 11.909848241759345 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7690610500859716,
            "unit": "iter/sec",
            "range": "stddev: 0.0014449367402201573",
            "extra": "mean: 565.2716167999984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1664417434916935,
            "unit": "iter/sec",
            "range": "stddev: 0.14247105455114178",
            "extra": "mean: 6.008108176599978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1713.9224259733462,
            "unit": "iter/sec",
            "range": "stddev: 0.000019475827870368015",
            "extra": "mean: 583.4569784756123 usec\nrounds: 1208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 78.33387979580927,
            "unit": "iter/sec",
            "range": "stddev: 0.00007960415535631717",
            "extra": "mean: 12.76586839062066 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.96192050601663,
            "unit": "iter/sec",
            "range": "stddev: 0.0008156705650455574",
            "extra": "mean: 10.00380939999858 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2177.0017304136013,
            "unit": "iter/sec",
            "range": "stddev: 0.00008642359222430627",
            "extra": "mean: 459.34736111119827 usec\nrounds: 612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.843482945481422,
            "unit": "iter/sec",
            "range": "stddev: 0.003694799493544314",
            "extra": "mean: 1.1855604258000085 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9965.139958809306,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017192126031640227",
            "extra": "mean: 100.3498198854686 usec\nrounds: 4375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 164.23573262283264,
            "unit": "iter/sec",
            "range": "stddev: 0.0037159543890613847",
            "extra": "mean: 6.0888089578928595 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.564590242171128,
            "unit": "iter/sec",
            "range": "stddev: 0.00029667265458939603",
            "extra": "mean: 64.24839873333592 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.78458245899792,
            "unit": "iter/sec",
            "range": "stddev: 0.00005888767305827627",
            "extra": "mean: 9.026526776594626 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2222.0903980906064,
            "unit": "iter/sec",
            "range": "stddev: 0.00008084235507784486",
            "extra": "mean: 450.0266959702801 usec\nrounds: 1365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 513.8100650160063,
            "unit": "iter/sec",
            "range": "stddev: 0.00004608144703827404",
            "extra": "mean: 1.9462444745391427 msec\nrounds: 432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2102.5771950726175,
            "unit": "iter/sec",
            "range": "stddev: 0.00008548965516501918",
            "extra": "mean: 475.6067945298259 usec\nrounds: 1280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2136.8267293499844,
            "unit": "iter/sec",
            "range": "stddev: 0.00008722734893496676",
            "extra": "mean: 467.9836630011628 usec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8937302419748623,
            "unit": "iter/sec",
            "range": "stddev: 0.0024788030269448443",
            "extra": "mean: 1.1189058543999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.90682769313226,
            "unit": "iter/sec",
            "range": "stddev: 0.00009552782243752704",
            "extra": "mean: 13.349917901965616 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8518.515611090144,
            "unit": "iter/sec",
            "range": "stddev: 0.000012722353579091574",
            "extra": "mean: 117.39134441429127 usec\nrounds: 3670"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1942427.5798524846,
            "unit": "iter/sec",
            "range": "stddev: 7.01602696953992e-8",
            "extra": "mean: 514.8197082724411 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 252.18352898425687,
            "unit": "iter/sec",
            "range": "stddev: 0.0003692498521209383",
            "extra": "mean: 3.965366033332127 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1854090.9031001888,
            "unit": "iter/sec",
            "range": "stddev: 1.1639610232814204e-7",
            "extra": "mean: 539.3478811248789 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 276.61282012771085,
            "unit": "iter/sec",
            "range": "stddev: 0.00026952832875887255",
            "extra": "mean: 3.615161435895504 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.15406461885988,
            "unit": "iter/sec",
            "range": "stddev: 0.0007999369168065029",
            "extra": "mean: 10.085315249999264 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.31213819882308,
            "unit": "iter/sec",
            "range": "stddev: 0.00006597478809611253",
            "extra": "mean: 8.98374621295859 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7111464881519846,
            "unit": "iter/sec",
            "range": "stddev: 0.0034741803601916615",
            "extra": "mean: 1.4061800439999956 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7000848.293594046,
            "unit": "iter/sec",
            "range": "stddev: 6.027660993045283e-9",
            "extra": "mean: 142.83983284068174 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2093.142971657365,
            "unit": "iter/sec",
            "range": "stddev: 0.00012125036343022281",
            "extra": "mean: 477.75045161305604 usec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8948712421859979,
            "unit": "iter/sec",
            "range": "stddev: 0.004287551765795485",
            "extra": "mean: 1.1174792002000118 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 217.20423135450986,
            "unit": "iter/sec",
            "range": "stddev: 0.012808284275315305",
            "extra": "mean: 4.603961873872752 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 639.405664966245,
            "unit": "iter/sec",
            "range": "stddev: 0.00004849591002645188",
            "extra": "mean: 1.5639523619997817 msec\nrounds: 500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.72472334065146,
            "unit": "iter/sec",
            "range": "stddev: 0.0003547057645238555",
            "extra": "mean: 174.68093049998856 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.54096160885876,
            "unit": "iter/sec",
            "range": "stddev: 0.00045249226526477887",
            "extra": "mean: 22.966879073165483 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 102.30403149137464,
            "unit": "iter/sec",
            "range": "stddev: 0.00034635992065146806",
            "extra": "mean: 9.774785855670908 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 231.50869311901207,
            "unit": "iter/sec",
            "range": "stddev: 0.004143868981297662",
            "extra": "mean: 4.319492225226845 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1955436.921198253,
            "unit": "iter/sec",
            "range": "stddev: 9.49459598602312e-8",
            "extra": "mean: 511.39466027225245 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.43614546825917,
            "unit": "iter/sec",
            "range": "stddev: 0.000690731433116022",
            "extra": "mean: 10.158869948056335 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 123.2363552766403,
            "unit": "iter/sec",
            "range": "stddev: 0.00015467698151840504",
            "extra": "mean: 8.114488600017467 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 282.1872278916255,
            "unit": "iter/sec",
            "range": "stddev: 0.00022838548356800018",
            "extra": "mean: 3.5437464957983553 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.9939609192365,
            "unit": "iter/sec",
            "range": "stddev: 0.003470534885661616",
            "extra": "mean: 90.95902808334226 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.92018504107672,
            "unit": "iter/sec",
            "range": "stddev: 0.0007567432495313277",
            "extra": "mean: 10.535166988636295 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 98.32537163368194,
            "unit": "iter/sec",
            "range": "stddev: 0.0008242369588131567",
            "extra": "mean: 10.170314979592145 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.45138568133729,
            "unit": "iter/sec",
            "range": "stddev: 0.0007442734398933585",
            "extra": "mean: 23.556357088235767 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.4638679783414,
            "unit": "iter/sec",
            "range": "stddev: 0.0006362258349605888",
            "extra": "mean: 10.156009717391612 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.00831933651321,
            "unit": "iter/sec",
            "range": "stddev: 0.0006807077698048324",
            "extra": "mean: 10.308394237107532 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.31998920647789,
            "unit": "iter/sec",
            "range": "stddev: 0.00014309633034020658",
            "extra": "mean: 6.438321333325803 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.750313652689954,
            "unit": "iter/sec",
            "range": "stddev: 0.0007487002803498762",
            "extra": "mean: 23.39164124324682 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.97127949428442,
            "unit": "iter/sec",
            "range": "stddev: 0.00011625048857742272",
            "extra": "mean: 10.756009871429992 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 75.71789939947818,
            "unit": "iter/sec",
            "range": "stddev: 0.02376474547906087",
            "extra": "mean: 13.20691683117257 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13908.763668953141,
            "unit": "iter/sec",
            "range": "stddev: 0.000002433350466226675",
            "extra": "mean: 71.8971163649994 usec\nrounds: 6789"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12055234.962127378,
            "unit": "iter/sec",
            "range": "stddev: 9.129270726826948e-9",
            "extra": "mean: 82.95151468561227 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.6991963410429,
            "unit": "iter/sec",
            "range": "stddev: 0.0009148197691671088",
            "extra": "mean: 38.91172263635925 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.46201712165123,
            "unit": "iter/sec",
            "range": "stddev: 0.0003125891217821728",
            "extra": "mean: 3.7249217253212348 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6193982.89775668,
            "unit": "iter/sec",
            "range": "stddev: 1.2619839264650873e-8",
            "extra": "mean: 161.4470069591586 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.89504859979291,
            "unit": "iter/sec",
            "range": "stddev: 0.0002745759044232559",
            "extra": "mean: 6.176841161288482 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.19211604133838,
            "unit": "iter/sec",
            "range": "stddev: 0.00006554068102701249",
            "extra": "mean: 6.361642206896814 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5458932778544296,
            "unit": "iter/sec",
            "range": "stddev: 0.0017068995424729591",
            "extra": "mean: 392.78944200000296 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 97.80409406673522,
            "unit": "iter/sec",
            "range": "stddev: 0.0008828026362768626",
            "extra": "mean: 10.22452086021741 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.46784458405142,
            "unit": "iter/sec",
            "range": "stddev: 0.0003032174596594237",
            "extra": "mean: 16.00823602380718 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1934027.4461839441,
            "unit": "iter/sec",
            "range": "stddev: 1.1526778549768403e-7",
            "extra": "mean: 517.0557439467127 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.03501815921481,
            "unit": "iter/sec",
            "range": "stddev: 0.0001890731361253433",
            "extra": "mean: 10.200436729413763 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.31733749675654,
            "unit": "iter/sec",
            "range": "stddev: 0.000930445785485364",
            "extra": "mean: 11.585158080641401 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.11602394410905,
            "unit": "iter/sec",
            "range": "stddev: 0.0007266172727949552",
            "extra": "mean: 9.988411051544174 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.4879575969463,
            "unit": "iter/sec",
            "range": "stddev: 0.0002652677977414462",
            "extra": "mean: 3.5908195407404055 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 79.63063406001356,
            "unit": "iter/sec",
            "range": "stddev: 0.022713162876240818",
            "extra": "mean: 12.557981131311234 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.634212643848,
            "unit": "iter/sec",
            "range": "stddev: 0.00024987018236080193",
            "extra": "mean: 3.5761003295889093 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4424.068348886332,
            "unit": "iter/sec",
            "range": "stddev: 0.00003940297820217769",
            "extra": "mean: 226.03629083889024 usec\nrounds: 1310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5642609.383047746,
            "unit": "iter/sec",
            "range": "stddev: 7.582792885482609e-9",
            "extra": "mean: 177.22297116743647 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.7037229424164,
            "unit": "iter/sec",
            "range": "stddev: 0.00024450728118892645",
            "extra": "mean: 3.439928425677863 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.23064043804541,
            "unit": "iter/sec",
            "range": "stddev: 0.0007632137578850475",
            "extra": "mean: 10.500821956044431 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 734.714795830112,
            "unit": "iter/sec",
            "range": "stddev: 0.000012842457607757299",
            "extra": "mean: 1.3610723585199582 msec\nrounds: 622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 779076.8049566608,
            "unit": "iter/sec",
            "range": "stddev: 3.423597250942748e-7",
            "extra": "mean: 1.283570494767366 usec\nrounds: 23867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.096137451221,
            "unit": "iter/sec",
            "range": "stddev: 0.0007296906363830533",
            "extra": "mean: 10.515674209301551 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.83612918377619,
            "unit": "iter/sec",
            "range": "stddev: 0.0008328119264448576",
            "extra": "mean: 18.23615223913106 msec\nrounds: 46"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "b90481411208cd5307ed1c3f446f49f04943dc57",
          "message": "style(pyproject): reformat using tablo==0.12.0",
          "timestamp": "2023-04-11T22:03:08+02:00",
          "tree_id": "7843c963ab574ed27285c03759465b801bac7639",
          "url": "https://github.com/ibis-project/ibis/commit/b90481411208cd5307ed1c3f446f49f04943dc57"
        },
        "date": 1681244083105,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.101372050099663,
            "unit": "iter/sec",
            "range": "stddev: 0.0003880319567105593",
            "extra": "mean: 90.07895559999923 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2346.4315515162293,
            "unit": "iter/sec",
            "range": "stddev: 0.00008266648625649575",
            "extra": "mean: 426.17906299197807 usec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 146.5421439452137,
            "unit": "iter/sec",
            "range": "stddev: 0.00015850288935908638",
            "extra": "mean: 6.823975500002651 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.1201152874706,
            "unit": "iter/sec",
            "range": "stddev: 0.000037643690071926195",
            "extra": "mean: 1.4553496219240063 msec\nrounds: 447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.92305373609031,
            "unit": "iter/sec",
            "range": "stddev: 0.000726338813366798",
            "extra": "mean: 10.31746278571534 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1186.3901774838662,
            "unit": "iter/sec",
            "range": "stddev: 0.00001205058374957578",
            "extra": "mean: 842.8930203390858 usec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2320.8604552701927,
            "unit": "iter/sec",
            "range": "stddev: 0.00008113339521583437",
            "extra": "mean: 430.874677419406 usec\nrounds: 1364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 86.7571271507566,
            "unit": "iter/sec",
            "range": "stddev: 0.010598678176344243",
            "extra": "mean: 11.526430540540082 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.32480903853516,
            "unit": "iter/sec",
            "range": "stddev: 0.0006283968079162915",
            "extra": "mean: 11.32184729166763 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.87834719861071,
            "unit": "iter/sec",
            "range": "stddev: 0.00007428067267984425",
            "extra": "mean: 8.4119608285712 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7003834.2094307775,
            "unit": "iter/sec",
            "range": "stddev: 1.2050037938963632e-8",
            "extra": "mean: 142.77893652218688 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.922733901604001,
            "unit": "iter/sec",
            "range": "stddev: 0.0013158320170028916",
            "extra": "mean: 1.0837360568000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 178.86009645427785,
            "unit": "iter/sec",
            "range": "stddev: 0.003534832285346877",
            "extra": "mean: 5.590961985507096 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2335.4246595666727,
            "unit": "iter/sec",
            "range": "stddev: 0.00007863741153437072",
            "extra": "mean: 428.1876513993586 usec\nrounds: 1179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 546.993761849595,
            "unit": "iter/sec",
            "range": "stddev: 0.000036111053419662317",
            "extra": "mean: 1.8281744139432554 msec\nrounds: 459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.59115337823484,
            "unit": "iter/sec",
            "range": "stddev: 0.0007182264852222597",
            "extra": "mean: 22.940434526316118 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8410443196383304,
            "unit": "iter/sec",
            "range": "stddev: 0.0013136744046520043",
            "extra": "mean: 1.1889979834000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4661.773349094692,
            "unit": "iter/sec",
            "range": "stddev: 0.000034901576132295913",
            "extra": "mean: 214.51064329290014 usec\nrounds: 984"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 708068.3415654986,
            "unit": "iter/sec",
            "range": "stddev: 8.446622446108921e-7",
            "extra": "mean: 1.4122930532228812 usec\nrounds: 23982"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2352.7764659433356,
            "unit": "iter/sec",
            "range": "stddev: 0.00007932713125230687",
            "extra": "mean: 425.0297529217483 usec\nrounds: 1198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 752.3621154553165,
            "unit": "iter/sec",
            "range": "stddev: 0.000026939177076117286",
            "extra": "mean: 1.3291472011384005 msec\nrounds: 527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13594.78668259451,
            "unit": "iter/sec",
            "range": "stddev: 0.000001974819316215051",
            "extra": "mean: 73.55760876191653 usec\nrounds: 7875"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 256.04236733048185,
            "unit": "iter/sec",
            "range": "stddev: 0.003912928667005073",
            "extra": "mean: 3.905603632813115 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 298.52533901615357,
            "unit": "iter/sec",
            "range": "stddev: 0.00005438769313695997",
            "extra": "mean: 3.349799394904594 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 509309.80062858295,
            "unit": "iter/sec",
            "range": "stddev: 1.7042261894157501e-7",
            "extra": "mean: 1.9634415021384122 usec\nrounds: 2077"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7048474675627233,
            "unit": "iter/sec",
            "range": "stddev: 0.001969067187251979",
            "extra": "mean: 1.4187466736000034 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11535.078621268281,
            "unit": "iter/sec",
            "range": "stddev: 0.000012010943177153371",
            "extra": "mean: 86.69208358547364 usec\nrounds: 4630"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 351.7096078100858,
            "unit": "iter/sec",
            "range": "stddev: 0.00003268405738665669",
            "extra": "mean: 2.8432547129618775 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 281.81603812311516,
            "unit": "iter/sec",
            "range": "stddev: 0.00024554294545357124",
            "extra": "mean: 3.5484140883533972 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.0170743180012,
            "unit": "iter/sec",
            "range": "stddev: 0.000055731002002926625",
            "extra": "mean: 6.096926214286508 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.18633080139081,
            "unit": "iter/sec",
            "range": "stddev: 0.00003513800316588409",
            "extra": "mean: 9.417407988890622 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.0497610454466,
            "unit": "iter/sec",
            "range": "stddev: 0.0002360328545929093",
            "extra": "mean: 3.6225352857138255 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 89.80999946808397,
            "unit": "iter/sec",
            "range": "stddev: 0.011714906299756968",
            "extra": "mean: 11.134617591834779 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5915015.045366347,
            "unit": "iter/sec",
            "range": "stddev: 9.117756363426753e-9",
            "extra": "mean: 169.06127749936874 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.2785959304196,
            "unit": "iter/sec",
            "range": "stddev: 0.000732211963800959",
            "extra": "mean: 9.97221780701707 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 94.88354665049404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006865070345709673",
            "extra": "mean: 10.539235044443746 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.33048723193667,
            "unit": "iter/sec",
            "range": "stddev: 0.0008699499243145736",
            "extra": "mean: 10.067402545454147 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8077.502638502799,
            "unit": "iter/sec",
            "range": "stddev: 0.000011157421167147361",
            "extra": "mean: 123.80064046445851 usec\nrounds: 3791"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.608782630499906,
            "unit": "iter/sec",
            "range": "stddev: 0.0002857855304426523",
            "extra": "mean: 37.58157649999987 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.67493760687961,
            "unit": "iter/sec",
            "range": "stddev: 0.00015204549844471333",
            "extra": "mean: 10.343942543479208 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.240110761109,
            "unit": "iter/sec",
            "range": "stddev: 0.00003542251509640135",
            "extra": "mean: 5.1749090603463745 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 101.68138343525867,
            "unit": "iter/sec",
            "range": "stddev: 0.00006705486136828652",
            "extra": "mean: 9.834641959181326 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.63285343391926,
            "unit": "iter/sec",
            "range": "stddev: 0.00020904687405554016",
            "extra": "mean: 20.56223168888841 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.16636685660327,
            "unit": "iter/sec",
            "range": "stddev: 0.0003116010472588727",
            "extra": "mean: 17.49280311110921 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.47489480001653,
            "unit": "iter/sec",
            "range": "stddev: 0.0006173550588904225",
            "extra": "mean: 10.473957600001741 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9240.912605869173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021387875357875614",
            "extra": "mean: 108.2144202256464 usec\nrounds: 4519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.66488875905925,
            "unit": "iter/sec",
            "range": "stddev: 0.0007407443104923173",
            "extra": "mean: 9.933950281249437 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.51908127761013,
            "unit": "iter/sec",
            "range": "stddev: 0.00009202624355863199",
            "extra": "mean: 6.308388819442673 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6479873.182931054,
            "unit": "iter/sec",
            "range": "stddev: 7.611391062135983e-9",
            "extra": "mean: 154.32400785777392 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1893248.204381279,
            "unit": "iter/sec",
            "range": "stddev: 8.44696958069441e-8",
            "extra": "mean: 528.1927629382351 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.632758132463,
            "unit": "iter/sec",
            "range": "stddev: 0.0007346097074074563",
            "extra": "mean: 9.937122052082673 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18039557608643692,
            "unit": "iter/sec",
            "range": "stddev: 0.07110347301882508",
            "extra": "mean: 5.5433731895999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.58766183955942,
            "unit": "iter/sec",
            "range": "stddev: 0.0006791668640292111",
            "extra": "mean: 10.353289239583082 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2276.9676577003343,
            "unit": "iter/sec",
            "range": "stddev: 0.00009426342750971371",
            "extra": "mean: 439.18059029875224 usec\nrounds: 1340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.27323560645206,
            "unit": "iter/sec",
            "range": "stddev: 0.000626440972375775",
            "extra": "mean: 9.972750893615874 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69976.29348631171,
            "unit": "iter/sec",
            "range": "stddev: 4.149293602393021e-7",
            "extra": "mean: 14.290553988767828 usec\nrounds: 14327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2365.8696379867147,
            "unit": "iter/sec",
            "range": "stddev: 0.00007729572418429733",
            "extra": "mean: 422.677557522134 usec\nrounds: 1469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.48002421067439,
            "unit": "iter/sec",
            "range": "stddev: 0.0000680705597073019",
            "extra": "mean: 8.970216925233215 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.72507565958294,
            "unit": "iter/sec",
            "range": "stddev: 0.0006215174257691303",
            "extra": "mean: 10.027568225804664 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 72.94915530245268,
            "unit": "iter/sec",
            "range": "stddev: 0.00006469676084108391",
            "extra": "mean: 13.708177920003664 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.88893585019093,
            "unit": "iter/sec",
            "range": "stddev: 0.00022347890165849338",
            "extra": "mean: 3.547496452757007 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.32484674155762,
            "unit": "iter/sec",
            "range": "stddev: 0.0003520614131825828",
            "extra": "mean: 3.9475006611578123 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.39040125613622,
            "unit": "iter/sec",
            "range": "stddev: 0.00024955556677512265",
            "extra": "mean: 14.838908529409375 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7731875899527385,
            "unit": "iter/sec",
            "range": "stddev: 0.0009458617359288653",
            "extra": "mean: 563.9561237999942 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2338.9293094535283,
            "unit": "iter/sec",
            "range": "stddev: 0.00008813934470010902",
            "extra": "mean: 427.5460553502756 usec\nrounds: 1355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 130.93500511021588,
            "unit": "iter/sec",
            "range": "stddev: 0.0000428508999373726",
            "extra": "mean: 7.637377026550231 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1738.4434432613166,
            "unit": "iter/sec",
            "range": "stddev: 0.000004426391560382478",
            "extra": "mean: 575.2272263307007 usec\nrounds: 1352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 106.18160458108406,
            "unit": "iter/sec",
            "range": "stddev: 0.00017836370282508745",
            "extra": "mean: 9.417827164557156 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12386303.272199124,
            "unit": "iter/sec",
            "range": "stddev: 2.7911933842396827e-9",
            "extra": "mean: 80.73433840772528 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.540138764732602,
            "unit": "iter/sec",
            "range": "stddev: 0.002434533598270742",
            "extra": "mean: 393.6792799999921 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.62345546740037,
            "unit": "iter/sec",
            "range": "stddev: 0.029093605359047633",
            "extra": "mean: 27.30490575609748 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.66080461070413,
            "unit": "iter/sec",
            "range": "stddev: 0.00025580245241866564",
            "extra": "mean: 3.6946612991796735 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.646807631175957,
            "unit": "iter/sec",
            "range": "stddev: 0.00012727052160660623",
            "extra": "mean: 63.91080043749753 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.4442076407306,
            "unit": "iter/sec",
            "range": "stddev: 0.0006333737891623193",
            "extra": "mean: 10.158037978724684 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 86.74056864809027,
            "unit": "iter/sec",
            "range": "stddev: 0.000040636625569457775",
            "extra": "mean: 11.528630900000637 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.7988751923183,
            "unit": "iter/sec",
            "range": "stddev: 0.0003185270970823876",
            "extra": "mean: 3.7341456317986985 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 277.00716134819106,
            "unit": "iter/sec",
            "range": "stddev: 0.00022936968172705016",
            "extra": "mean: 3.610014972656339 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2356.7105612026417,
            "unit": "iter/sec",
            "range": "stddev: 0.00008401748681612789",
            "extra": "mean: 424.32024384432464 usec\nrounds: 1665"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.754681937290568,
            "unit": "iter/sec",
            "range": "stddev: 0.0002260456136253204",
            "extra": "mean: 173.77155000000263 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.9461461141966,
            "unit": "iter/sec",
            "range": "stddev: 0.025291257079343307",
            "extra": "mean: 27.066422487181924 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.34200044593156,
            "unit": "iter/sec",
            "range": "stddev: 0.0007057047537571287",
            "extra": "mean: 10.379688976473076 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.8377997413479,
            "unit": "iter/sec",
            "range": "stddev: 0.0002475007532522348",
            "extra": "mean: 3.5863143409093303 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2583270.1757782097,
            "unit": "iter/sec",
            "range": "stddev: 1.3644816347810267e-8",
            "extra": "mean: 387.1062382000314 nsec\nrounds: 126599"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1639844.0958800155,
            "unit": "iter/sec",
            "range": "stddev: 7.166733887870417e-8",
            "extra": "mean: 609.8140686132447 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9144984913081281,
            "unit": "iter/sec",
            "range": "stddev: 0.004176355169793343",
            "extra": "mean: 1.0934955163999973 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2502486.4510728014,
            "unit": "iter/sec",
            "range": "stddev: 6.077719732937379e-8",
            "extra": "mean: 399.6025631113901 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.2577711324171,
            "unit": "iter/sec",
            "range": "stddev: 0.0007386915663875838",
            "extra": "mean: 10.497831180722333 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138592.160365593,
            "unit": "iter/sec",
            "range": "stddev: 3.747763933076148e-7",
            "extra": "mean: 7.215415340680848 usec\nrounds: 42736"
          }
        ]
      }
    ]
  }
}