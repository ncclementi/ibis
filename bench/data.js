window.BENCHMARK_DATA = {
  "lastUpdate": 1681242927031,
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
      }
    ]
  }
}