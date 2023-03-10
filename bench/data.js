window.BENCHMARK_DATA = {
  "lastUpdate": 1678449134786,
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
          "id": "e68703329d8897f612e00c9d66aa6ed46ce5a263",
          "message": "test(bigquery/snowflake): xfail cloud partitioning tests",
          "timestamp": "2023-03-10T06:47:20-05:00",
          "tree_id": "8ecbd35154c15dc42db9accaea637eaeb5fde96d",
          "url": "https://github.com/ibis-project/ibis/commit/e68703329d8897f612e00c9d66aa6ed46ce5a263"
        },
        "date": 1678449056644,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 342.206445744404,
            "unit": "iter/sec",
            "range": "stddev: 0.00003154628620943609",
            "extra": "mean: 2.9222126363654346 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 295.025346459882,
            "unit": "iter/sec",
            "range": "stddev: 0.000045710180436808305",
            "extra": "mean: 3.38953927857172 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.71439386198312,
            "unit": "iter/sec",
            "range": "stddev: 0.030381794641011928",
            "extra": "mean: 102.94003045454629 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.5809002165293,
            "unit": "iter/sec",
            "range": "stddev: 0.0006154575497778898",
            "extra": "mean: 8.224976112358535 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 313.72939110302246,
            "unit": "iter/sec",
            "range": "stddev: 0.000266333833138238",
            "extra": "mean: 3.187460366668738 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9011820289377691,
            "unit": "iter/sec",
            "range": "stddev: 0.012490877621349487",
            "extra": "mean: 1.1096537302000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 236.08366597050494,
            "unit": "iter/sec",
            "range": "stddev: 0.0037585328407942755",
            "extra": "mean: 4.235786478023155 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12228.350383421843,
            "unit": "iter/sec",
            "range": "stddev: 0.00001719479516642929",
            "extra": "mean: 81.77717914885028 usec\nrounds: 3712"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.19923722330898,
            "unit": "iter/sec",
            "range": "stddev: 0.0010569823799628094",
            "extra": "mean: 25.510700483869922 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.42052057281188,
            "unit": "iter/sec",
            "range": "stddev: 0.0006937827340718152",
            "extra": "mean: 9.669260940298235 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 97.28900821602318,
            "unit": "iter/sec",
            "range": "stddev: 0.000269873776808575",
            "extra": "mean: 10.2786534505478 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 316.64220122039467,
            "unit": "iter/sec",
            "range": "stddev: 0.0002103905228691679",
            "extra": "mean: 3.1581387324425627 msec\nrounds: 299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 492536.81888301997,
            "unit": "iter/sec",
            "range": "stddev: 3.3439646531405247e-7",
            "extra": "mean: 2.030305068903905 usec\nrounds: 2170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 302.83311206115764,
            "unit": "iter/sec",
            "range": "stddev: 0.00019173796439624508",
            "extra": "mean: 3.3021488079482153 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5215.124178251114,
            "unit": "iter/sec",
            "range": "stddev: 0.000056121498208753603",
            "extra": "mean: 191.7499882688026 usec\nrounds: 2472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.25592360421419,
            "unit": "iter/sec",
            "range": "stddev: 0.0006231703159077088",
            "extra": "mean: 8.829560239997818 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5474688920994613,
            "unit": "iter/sec",
            "range": "stddev: 0.0021737631190201236",
            "extra": "mean: 392.5465010000039 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8246.690503355752,
            "unit": "iter/sec",
            "range": "stddev: 0.000014324237941530588",
            "extra": "mean: 121.26076510244671 usec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.41612388797958,
            "unit": "iter/sec",
            "range": "stddev: 0.00018179826321438675",
            "extra": "mean: 6.352589400000852 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 219.256545347933,
            "unit": "iter/sec",
            "range": "stddev: 0.013025095561681467",
            "extra": "mean: 4.560867263566174 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 283.59900147174403,
            "unit": "iter/sec",
            "range": "stddev: 0.00029473176399211253",
            "extra": "mean: 3.5261055039350464 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 312.2600005976436,
            "unit": "iter/sec",
            "range": "stddev: 0.0002409344131242736",
            "extra": "mean: 3.2024594827581843 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.29857258007749,
            "unit": "iter/sec",
            "range": "stddev: 0.0006393752233104355",
            "extra": "mean: 9.2337320444421 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.7907565922553,
            "unit": "iter/sec",
            "range": "stddev: 0.00005960979017647162",
            "extra": "mean: 5.030414980768573 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7318348242737829,
            "unit": "iter/sec",
            "range": "stddev: 0.002404768959429541",
            "extra": "mean: 577.4222726000062 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 309.38627017582365,
            "unit": "iter/sec",
            "range": "stddev: 0.00023102509392287918",
            "extra": "mean: 3.232205486790677 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.73723305057274,
            "unit": "iter/sec",
            "range": "stddev: 0.00011857167609229032",
            "extra": "mean: 7.260201020829508 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5302.377585340832,
            "unit": "iter/sec",
            "range": "stddev: 0.000050426341074533174",
            "extra": "mean: 188.59464153677789 usec\nrounds: 2056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.695414057122731,
            "unit": "iter/sec",
            "range": "stddev: 0.00011932749116896741",
            "extra": "mean: 63.71287793750113 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148481.08102714678,
            "unit": "iter/sec",
            "range": "stddev: 3.4988024761028396e-7",
            "extra": "mean: 6.734864759081126 usec\nrounds: 32468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.23527658495574,
            "unit": "iter/sec",
            "range": "stddev: 0.0004078739391285312",
            "extra": "mean: 21.170618069768988 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.60799359043007,
            "unit": "iter/sec",
            "range": "stddev: 0.02895871922585021",
            "extra": "mean: 32.67120391428274 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 760.2144211308171,
            "unit": "iter/sec",
            "range": "stddev: 0.00005566476082718945",
            "extra": "mean: 1.3154183506707258 msec\nrounds: 596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5312.629615182284,
            "unit": "iter/sec",
            "range": "stddev: 0.000021110768320496207",
            "extra": "mean: 188.2307016363851 usec\nrounds: 2383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.33631710796669,
            "unit": "iter/sec",
            "range": "stddev: 0.0007587558830092471",
            "extra": "mean: 9.77170205319175 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16679950764603046,
            "unit": "iter/sec",
            "range": "stddev: 0.19745282194401514",
            "extra": "mean: 5.995221533400001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 154.21009616376372,
            "unit": "iter/sec",
            "range": "stddev: 0.00426708147936535",
            "extra": "mean: 6.484659726416668 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.40904735328351,
            "unit": "iter/sec",
            "range": "stddev: 0.0007268384777093025",
            "extra": "mean: 9.577714052081632 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.75671079028795,
            "unit": "iter/sec",
            "range": "stddev: 0.0007488998319318213",
            "extra": "mean: 9.280164480392894 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5705.638939577802,
            "unit": "iter/sec",
            "range": "stddev: 0.00006102775376945663",
            "extra": "mean: 175.26520878553814 usec\nrounds: 3688"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1171.602626680829,
            "unit": "iter/sec",
            "range": "stddev: 0.000012117656402721141",
            "extra": "mean: 853.5317156406671 usec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.5604956308496,
            "unit": "iter/sec",
            "range": "stddev: 0.00006942865266996045",
            "extra": "mean: 1.8672026935483284 msec\nrounds: 434"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.54562069646501,
            "unit": "iter/sec",
            "range": "stddev: 0.000738437679550198",
            "extra": "mean: 8.295614508618353 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 713003.9841523506,
            "unit": "iter/sec",
            "range": "stddev: 0.00001683685870784892",
            "extra": "mean: 1.4025167070964444 usec\nrounds: 24331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9011267654832811,
            "unit": "iter/sec",
            "range": "stddev: 0.004888054273171318",
            "extra": "mean: 1.109721781999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.00682930829353,
            "unit": "iter/sec",
            "range": "stddev: 0.0007579866856318895",
            "extra": "mean: 9.708094178950576 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 118.06687805888802,
            "unit": "iter/sec",
            "range": "stddev: 0.0008587079699839404",
            "extra": "mean: 8.469775913793805 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5400.755593365592,
            "unit": "iter/sec",
            "range": "stddev: 0.00007276530705219016",
            "extra": "mean: 185.15927682941663 usec\nrounds: 3280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1874292.8470201583,
            "unit": "iter/sec",
            "range": "stddev: 1.220029642318852e-7",
            "extra": "mean: 533.5345549602073 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12586.707092739243,
            "unit": "iter/sec",
            "range": "stddev: 0.000041715813812475325",
            "extra": "mean: 79.44889736703726 usec\nrounds: 4102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.28678874000132,
            "unit": "iter/sec",
            "range": "stddev: 0.0005978839417199745",
            "extra": "mean: 19.125290041669036 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.1116720274378,
            "unit": "iter/sec",
            "range": "stddev: 0.0007715340021199136",
            "extra": "mean: 8.395482852172929 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.66704826794148,
            "unit": "iter/sec",
            "range": "stddev: 0.00019778672328778547",
            "extra": "mean: 12.396635571422264 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.358548753105204,
            "unit": "iter/sec",
            "range": "stddev: 0.0010563136295246233",
            "extra": "mean: 44.725622000002026 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.1109017366893,
            "unit": "iter/sec",
            "range": "stddev: 0.019495474547867424",
            "extra": "mean: 10.192547232761214 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 61.971636550094004,
            "unit": "iter/sec",
            "range": "stddev: 0.00022310678446568115",
            "extra": "mean: 16.136414264155547 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.688943184792168,
            "unit": "iter/sec",
            "range": "stddev: 0.002094751368992923",
            "extra": "mean: 1.4514985010000032 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11992175.91574132,
            "unit": "iter/sec",
            "range": "stddev: 3.5438328771385947e-9",
            "extra": "mean: 83.38770270095678 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.649722876572902,
            "unit": "iter/sec",
            "range": "stddev: 0.00018949264490768878",
            "extra": "mean: 176.99983200000702 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.49514038363634,
            "unit": "iter/sec",
            "range": "stddev: 0.0002415131635984708",
            "extra": "mean: 3.3389523406592057 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.9261843479067,
            "unit": "iter/sec",
            "range": "stddev: 0.000018791068311971196",
            "extra": "mean: 1.455760491863171 msec\nrounds: 553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1800.4938186617567,
            "unit": "iter/sec",
            "range": "stddev: 0.00000842911020784713",
            "extra": "mean: 555.4031841904709 usec\nrounds: 1379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.13691941732105,
            "unit": "iter/sec",
            "range": "stddev: 0.00006527764939153527",
            "extra": "mean: 8.917669623850363 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14082.201858020111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014207203705070257",
            "extra": "mean: 71.01162233592602 usec\nrounds: 7038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5751.387218285006,
            "unit": "iter/sec",
            "range": "stddev: 0.000048369012377668366",
            "extra": "mean: 173.87109614542484 usec\nrounds: 2309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.2521181748995,
            "unit": "iter/sec",
            "range": "stddev: 0.00006597941620968618",
            "extra": "mean: 6.051359649996257 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.96606467908708,
            "unit": "iter/sec",
            "range": "stddev: 0.0007243765129250784",
            "extra": "mean: 8.335690619468354 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.50832096559752,
            "unit": "iter/sec",
            "range": "stddev: 0.0002324798125124104",
            "extra": "mean: 8.367618186919945 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.56829985390705,
            "unit": "iter/sec",
            "range": "stddev: 0.000099262509621596",
            "extra": "mean: 13.233062037034802 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.70483885486463,
            "unit": "iter/sec",
            "range": "stddev: 0.0007347635476980977",
            "extra": "mean: 8.718028027268266 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71206.69768389927,
            "unit": "iter/sec",
            "range": "stddev: 0.000037916387306846155",
            "extra": "mean: 14.043622756376086 usec\nrounds: 3955"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.79143554700751,
            "unit": "iter/sec",
            "range": "stddev: 0.00031487384982209916",
            "extra": "mean: 10.225844363633547 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6108196.494057169,
            "unit": "iter/sec",
            "range": "stddev: 7.948417839067559e-9",
            "extra": "mean: 163.71444516765146 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.73719656083011,
            "unit": "iter/sec",
            "range": "stddev: 0.0007169053043683843",
            "extra": "mean: 10.668123612498448 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2697878.9853804307,
            "unit": "iter/sec",
            "range": "stddev: 1.9129026459149377e-8",
            "extra": "mean: 370.6615476155531 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1847027.3182091827,
            "unit": "iter/sec",
            "range": "stddev: 1.06989037370059e-7",
            "extra": "mean: 541.4105087355001 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5355.986960950698,
            "unit": "iter/sec",
            "range": "stddev: 0.00007109708054050439",
            "extra": "mean: 186.70695191955772 usec\nrounds: 2163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5594488.402197465,
            "unit": "iter/sec",
            "range": "stddev: 1.1460630515309726e-8",
            "extra": "mean: 178.7473542009363 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 219.49163789029126,
            "unit": "iter/sec",
            "range": "stddev: 0.016389578207459878",
            "extra": "mean: 4.555982221517847 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.45072283764708,
            "unit": "iter/sec",
            "range": "stddev: 0.0007192598367693302",
            "extra": "mean: 9.30659165049036 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5771.35730531118,
            "unit": "iter/sec",
            "range": "stddev: 0.00006196142950855884",
            "extra": "mean: 173.26946627957597 usec\nrounds: 3618"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.21701816934077,
            "unit": "iter/sec",
            "range": "stddev: 0.0009025928537378347",
            "extra": "mean: 26.869428266657756 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.69738532850517,
            "unit": "iter/sec",
            "range": "stddev: 0.0011409863645863091",
            "extra": "mean: 17.33180792000212 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.59277039852896,
            "unit": "iter/sec",
            "range": "stddev: 0.00015961092461168694",
            "extra": "mean: 6.226930374999995 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5451.392278310429,
            "unit": "iter/sec",
            "range": "stddev: 0.00005136160676807622",
            "extra": "mean: 183.43937639173782 usec\nrounds: 2067"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1948518.446062405,
            "unit": "iter/sec",
            "range": "stddev: 9.510975568463018e-8",
            "extra": "mean: 513.2104353545202 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7057232.017588427,
            "unit": "iter/sec",
            "range": "stddev: 5.280126773153011e-9",
            "extra": "mean: 141.69861462792497 nsec\nrounds: 57472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8324959327508025,
            "unit": "iter/sec",
            "range": "stddev: 0.002987136766483005",
            "extra": "mean: 1.2012070697999888 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}