window.BENCHMARK_DATA = {
  "lastUpdate": 1676566841609,
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
          "id": "e837875682fbce78725aba3477691ee996f10a0a",
          "message": "chore: dedup sqlalchemy array_map implementations",
          "timestamp": "2023-02-16T17:55:19+01:00",
          "tree_id": "1e5de90ef60ae12bd58c21fede85e13a58f69b86",
          "url": "https://github.com/ibis-project/ibis/commit/e837875682fbce78725aba3477691ee996f10a0a"
        },
        "date": 1676566755626,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3711.867950106239,
            "unit": "iter/sec",
            "range": "stddev: 0.0020535139725866825",
            "extra": "mean: 269.4061355203594 usec\nrounds: 701"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4442269.694310905,
            "unit": "iter/sec",
            "range": "stddev: 1.3308199569480716e-8",
            "extra": "mean: 225.11015062422146 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 147.36229074901513,
            "unit": "iter/sec",
            "range": "stddev: 0.0006315067425103422",
            "extra": "mean: 6.785996572916897 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 320.8282771687963,
            "unit": "iter/sec",
            "range": "stddev: 0.00004310029460839715",
            "extra": "mean: 3.116932238095314 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.41724036017415,
            "unit": "iter/sec",
            "range": "stddev: 0.00011668917884983131",
            "extra": "mean: 14.833001093748965 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.28217296291789,
            "unit": "iter/sec",
            "range": "stddev: 0.013358169932652254",
            "extra": "mean: 31.967088769229907 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2392397306037433,
            "unit": "iter/sec",
            "range": "stddev: 0.0020696546940480987",
            "extra": "mean: 446.58014340000136 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5711566765708482,
            "unit": "iter/sec",
            "range": "stddev: 0.00481460661812428",
            "extra": "mean: 636.4737615999985 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 130.8763618355073,
            "unit": "iter/sec",
            "range": "stddev: 0.006702507039272551",
            "extra": "mean: 7.640799193798309 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11700584.86181566,
            "unit": "iter/sec",
            "range": "stddev: 4.7690301827578925e-9",
            "extra": "mean: 85.46581318879512 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 143.62944522362295,
            "unit": "iter/sec",
            "range": "stddev: 0.00013424164284185034",
            "extra": "mean: 6.962360666665922 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5818.528999191344,
            "unit": "iter/sec",
            "range": "stddev: 0.000046429559898621504",
            "extra": "mean: 171.86474453233444 usec\nrounds: 2149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.82108055591557,
            "unit": "iter/sec",
            "range": "stddev: 0.00034641732340732323",
            "extra": "mean: 11.258588543858906 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8658258656044354,
            "unit": "iter/sec",
            "range": "stddev: 0.004355568530946507",
            "extra": "mean: 1.1549666505999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1507209.5867425506,
            "unit": "iter/sec",
            "range": "stddev: 2.0846895969677835e-7",
            "extra": "mean: 663.47773315405 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10890.640805860767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019291098858904943",
            "extra": "mean: 91.82196142782092 usec\nrounds: 4874"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 144.14601645515168,
            "unit": "iter/sec",
            "range": "stddev: 0.009038878376698898",
            "extra": "mean: 6.9374098888895155 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 158.41502784095889,
            "unit": "iter/sec",
            "range": "stddev: 0.0007024913592395991",
            "extra": "mean: 6.312532425925855 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 277.2950670842156,
            "unit": "iter/sec",
            "range": "stddev: 0.00004769733658385765",
            "extra": "mean: 3.6062668208096764 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 90.97702526446308,
            "unit": "iter/sec",
            "range": "stddev: 0.0006268510008928613",
            "extra": "mean: 10.991786081080123 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 519.2000825519319,
            "unit": "iter/sec",
            "range": "stddev: 0.000021514930949850203",
            "extra": "mean: 1.926039755396181 msec\nrounds: 417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 251.01913481302884,
            "unit": "iter/sec",
            "range": "stddev: 0.0002072261590081573",
            "extra": "mean: 3.983760045802278 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.92485591505218,
            "unit": "iter/sec",
            "range": "stddev: 0.0005913213320830722",
            "extra": "mean: 6.900127612244451 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 158.35610361289426,
            "unit": "iter/sec",
            "range": "stddev: 0.0007088842003625977",
            "extra": "mean: 6.314881316128658 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 253.19673538251155,
            "unit": "iter/sec",
            "range": "stddev: 0.00025727275976123246",
            "extra": "mean: 3.949498000000953 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7482950900789805,
            "unit": "iter/sec",
            "range": "stddev: 0.0019815319340564276",
            "extra": "mean: 1.3363711899999942 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 119.42577016480767,
            "unit": "iter/sec",
            "range": "stddev: 0.0004541561897060923",
            "extra": "mean: 8.37340214444503 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5183.41821588305,
            "unit": "iter/sec",
            "range": "stddev: 0.00004913950431069323",
            "extra": "mean: 192.92288570036587 usec\nrounds: 2056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 418.01651806463366,
            "unit": "iter/sec",
            "range": "stddev: 0.00004056391290841361",
            "extra": "mean: 2.3922499633025986 msec\nrounds: 327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 252.75366225818564,
            "unit": "iter/sec",
            "range": "stddev: 0.0002286568097337978",
            "extra": "mean: 3.9564214067787025 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 594005.6655608292,
            "unit": "iter/sec",
            "range": "stddev: 5.124009561701359e-7",
            "extra": "mean: 1.6834856264474383 usec\nrounds: 22124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 395812.334032307,
            "unit": "iter/sec",
            "range": "stddev: 4.31425855806629e-7",
            "extra": "mean: 2.5264498198239016 usec\nrounds: 1943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.6793337690574,
            "unit": "iter/sec",
            "range": "stddev: 0.0003933762539819072",
            "extra": "mean: 19.731908958332767 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6095.168762414073,
            "unit": "iter/sec",
            "range": "stddev: 0.00004553739033897262",
            "extra": "mean: 164.0643662184567 usec\nrounds: 2007"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8655496327882951,
            "unit": "iter/sec",
            "range": "stddev: 0.0014425982437939364",
            "extra": "mean: 1.1553352484000072 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 171.11013844858817,
            "unit": "iter/sec",
            "range": "stddev: 0.000039873138628500995",
            "extra": "mean: 5.844189064813715 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1474.3084796809496,
            "unit": "iter/sec",
            "range": "stddev: 0.000005983415725774799",
            "extra": "mean: 678.2840998217732 usec\nrounds: 1122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5870811590717522,
            "unit": "iter/sec",
            "range": "stddev: 0.0038359329479768097",
            "extra": "mean: 1.7033420074000047 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.06337668584557,
            "unit": "iter/sec",
            "range": "stddev: 0.0001495244539835523",
            "extra": "mean: 10.862082578313107 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15260159999359302,
            "unit": "iter/sec",
            "range": "stddev: 0.07688040322458944",
            "extra": "mean: 6.553011240000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.0147768737299,
            "unit": "iter/sec",
            "range": "stddev: 0.00012274246312183506",
            "extra": "mean: 9.802501467388032 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19459.613800141968,
            "unit": "iter/sec",
            "range": "stddev: 0.000013087163620723519",
            "extra": "mean: 51.38848130648433 usec\nrounds: 8265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5279.533682662201,
            "unit": "iter/sec",
            "range": "stddev: 0.000048495584132328854",
            "extra": "mean: 189.41066770422626 usec\nrounds: 1285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.82232343362247,
            "unit": "iter/sec",
            "range": "stddev: 0.0004506644705437809",
            "extra": "mean: 25.75837589189574 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120887.29482387289,
            "unit": "iter/sec",
            "range": "stddev: 4.614203814369849e-7",
            "extra": "mean: 8.272167901986334 usec\nrounds: 32787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 160.64176014221965,
            "unit": "iter/sec",
            "range": "stddev: 0.0007243225117195796",
            "extra": "mean: 6.225031393547221 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.70406152228634,
            "unit": "iter/sec",
            "range": "stddev: 0.00013273133812209434",
            "extra": "mean: 14.555180259257575 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55310.5401826806,
            "unit": "iter/sec",
            "range": "stddev: 6.086099872654558e-7",
            "extra": "mean: 18.079736641464407 usec\nrounds: 12595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.0054798552068,
            "unit": "iter/sec",
            "range": "stddev: 0.0004838493686890679",
            "extra": "mean: 4.545341328125711 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1558902.1158151445,
            "unit": "iter/sec",
            "range": "stddev: 1.2638940938392153e-7",
            "extra": "mean: 641.4770945878814 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4624041.839207555,
            "unit": "iter/sec",
            "range": "stddev: 1.3605689763924367e-8",
            "extra": "mean: 216.26101899021702 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.79375935740087,
            "unit": "iter/sec",
            "range": "stddev: 0.0009422754566139849",
            "extra": "mean: 11.655859441176668 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.22275477328458,
            "unit": "iter/sec",
            "range": "stddev: 0.028350124967666604",
            "extra": "mean: 32.02792345714605 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.137112670404273,
            "unit": "iter/sec",
            "range": "stddev: 0.0002684288249292249",
            "extra": "mean: 109.44376369999986 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 252.04458786016372,
            "unit": "iter/sec",
            "range": "stddev: 0.00010555316626100309",
            "extra": "mean: 3.967551965665724 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 250.45461615112123,
            "unit": "iter/sec",
            "range": "stddev: 0.00021498766409885138",
            "extra": "mean: 3.9927393448264983 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 268.38724524497025,
            "unit": "iter/sec",
            "range": "stddev: 0.000011309920239036966",
            "extra": "mean: 3.7259594772741558 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.634091404364819,
            "unit": "iter/sec",
            "range": "stddev: 0.0001646271149366048",
            "extra": "mean: 73.34555492857119 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.098526339504616,
            "unit": "iter/sec",
            "range": "stddev: 0.0008942580383713222",
            "extra": "mean: 17.51358684905555 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6040.55163968978,
            "unit": "iter/sec",
            "range": "stddev: 0.00004775412068981722",
            "extra": "mean: 165.54779424936035 usec\nrounds: 2226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.4293196790232,
            "unit": "iter/sec",
            "range": "stddev: 0.0007544041901032114",
            "extra": "mean: 11.437810607142683 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.87641465899688,
            "unit": "iter/sec",
            "range": "stddev: 0.00036642594194043394",
            "extra": "mean: 41.882335111113086 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10264.778381041951,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018969831811586115",
            "extra": "mean: 97.4205153661089 usec\nrounds: 4523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.918540891510928,
            "unit": "iter/sec",
            "range": "stddev: 0.00031767074363030483",
            "extra": "mean: 203.31232820000196 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.7978916756224,
            "unit": "iter/sec",
            "range": "stddev: 0.00010257834585099558",
            "extra": "mean: 7.3100541810338555 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6132.489528955878,
            "unit": "iter/sec",
            "range": "stddev: 0.00004695841846165508",
            "extra": "mean: 163.06591234738897 usec\nrounds: 2373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 619.7402645267692,
            "unit": "iter/sec",
            "range": "stddev: 0.000021657087119591993",
            "extra": "mean: 1.6135791996080733 msec\nrounds: 511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 240.45513697268487,
            "unit": "iter/sec",
            "range": "stddev: 0.0002219534403579235",
            "extra": "mean: 4.158779939534408 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9771.613061442375,
            "unit": "iter/sec",
            "range": "stddev: 0.000014867018805984978",
            "extra": "mean: 102.33724910228807 usec\nrounds: 4733"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 36.82084671185676,
            "unit": "iter/sec",
            "range": "stddev: 0.022700696883615545",
            "extra": "mean: 27.1585280975624 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.8063803965792,
            "unit": "iter/sec",
            "range": "stddev: 0.0006905180758984747",
            "extra": "mean: 10.775121233333431 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.05173225532839,
            "unit": "iter/sec",
            "range": "stddev: 0.0007421553740006322",
            "extra": "mean: 11.620916555553466 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5446196.950285638,
            "unit": "iter/sec",
            "range": "stddev: 5.921503570155759e-9",
            "extra": "mean: 183.61436597471092 nsec\nrounds: 52632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 240.3625185767274,
            "unit": "iter/sec",
            "range": "stddev: 0.00030527000761878555",
            "extra": "mean: 4.16038243367293 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.93213187662606,
            "unit": "iter/sec",
            "range": "stddev: 0.00021892948803516597",
            "extra": "mean: 11.503226464285936 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1509849.1511148848,
            "unit": "iter/sec",
            "range": "stddev: 1.1119362390216094e-7",
            "extra": "mean: 662.317821129079 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.80146958182414,
            "unit": "iter/sec",
            "range": "stddev: 0.000663037762828479",
            "extra": "mean: 10.775691424997191 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 159.74229368513366,
            "unit": "iter/sec",
            "range": "stddev: 0.0007475689144124417",
            "extra": "mean: 6.260082893082088 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1595565.5697082323,
            "unit": "iter/sec",
            "range": "stddev: 1.1695283657595197e-7",
            "extra": "mean: 626.7370134985186 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 955.6576379500416,
            "unit": "iter/sec",
            "range": "stddev: 0.00022208370582519292",
            "extra": "mean: 1.046399840580018 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4489.8380525370985,
            "unit": "iter/sec",
            "range": "stddev: 0.00002093338144063973",
            "extra": "mean: 222.72518257867327 usec\nrounds: 2032"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 68.4097791950385,
            "unit": "iter/sec",
            "range": "stddev: 0.01928541126422497",
            "extra": "mean: 14.617793124999976 msec\nrounds: 72"
          }
        ]
      }
    ]
  }
}