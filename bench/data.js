window.BENCHMARK_DATA = {
  "lastUpdate": 1678201498412,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "3d632035f597254355951b5c552d43e1eda3bdea",
          "message": "feat(examples): add imdb dataset examples",
          "timestamp": "2023-03-07T09:59:17-05:00",
          "tree_id": "db74af4fbbd36542e8db5fdbbba609471fd5cd3b",
          "url": "https://github.com/ibis-project/ibis/commit/3d632035f597254355951b5c552d43e1eda3bdea"
        },
        "date": 1678201409090,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.79277223154526,
            "unit": "iter/sec",
            "range": "stddev: 0.012590760469775624",
            "extra": "mean: 33.565187966669896 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 251.37573787242482,
            "unit": "iter/sec",
            "range": "stddev: 0.00033444441279536575",
            "extra": "mean: 3.978108661017667 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.189075240519344,
            "unit": "iter/sec",
            "range": "stddev: 0.0007473278006102449",
            "extra": "mean: 18.800853285717622 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.02506570574508,
            "unit": "iter/sec",
            "range": "stddev: 0.0004519106033829212",
            "extra": "mean: 18.173535772726787 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 105.22188486677857,
            "unit": "iter/sec",
            "range": "stddev: 0.0006983951358059121",
            "extra": "mean: 9.503726351852563 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 103.56514621620327,
            "unit": "iter/sec",
            "range": "stddev: 0.0006843292203353402",
            "extra": "mean: 9.655758105264423 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.198900086776295,
            "unit": "iter/sec",
            "range": "stddev: 0.01921527707421939",
            "extra": "mean: 34.247865400001274 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.96314664499388,
            "unit": "iter/sec",
            "range": "stddev: 0.0007374010367840776",
            "extra": "mean: 10.993463142856598 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.7214786877501,
            "unit": "iter/sec",
            "range": "stddev: 0.0005938476126699132",
            "extra": "mean: 11.27122783333492 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 450.3782935588987,
            "unit": "iter/sec",
            "range": "stddev: 0.00004626142035834418",
            "extra": "mean: 2.220355674999297 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 85.57799563673493,
            "unit": "iter/sec",
            "range": "stddev: 0.00022840507597975056",
            "extra": "mean: 11.685246803919574 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.24025806054476,
            "unit": "iter/sec",
            "range": "stddev: 0.00024103698073338846",
            "extra": "mean: 3.5940162181074498 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 148.30036260907363,
            "unit": "iter/sec",
            "range": "stddev: 0.003182348676762042",
            "extra": "mean: 6.743071846938397 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56900.5570689826,
            "unit": "iter/sec",
            "range": "stddev: 0.000028481445695648784",
            "extra": "mean: 17.574520382773475 usec\nrounds: 9199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.165069715218051,
            "unit": "iter/sec",
            "range": "stddev: 0.0011149506939742274",
            "extra": "mean: 109.10991744444232 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10093603.750736006,
            "unit": "iter/sec",
            "range": "stddev: 1.3250440213999571e-8",
            "extra": "mean: 99.07264290294492 nsec\nrounds: 99001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 49.45912683310478,
            "unit": "iter/sec",
            "range": "stddev: 0.0006697376751006464",
            "extra": "mean: 20.21871521052943 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4580.418597228501,
            "unit": "iter/sec",
            "range": "stddev: 0.000059008645388451376",
            "extra": "mean: 218.3206575497435 usec\nrounds: 1828"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4681.019431450575,
            "unit": "iter/sec",
            "range": "stddev: 0.00005968633395634545",
            "extra": "mean: 213.6286795310558 usec\nrounds: 2643"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 99.01679072735492,
            "unit": "iter/sec",
            "range": "stddev: 0.0007476167499418486",
            "extra": "mean: 10.099297226805945 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.9921781429618335,
            "unit": "iter/sec",
            "range": "stddev: 0.0015471738901530801",
            "extra": "mean: 200.3133644999906 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 103.02429337974093,
            "unit": "iter/sec",
            "range": "stddev: 0.0007658373592807024",
            "extra": "mean: 9.70644852000163 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 100.5433588379514,
            "unit": "iter/sec",
            "range": "stddev: 0.0007998903062026247",
            "extra": "mean: 9.945957759494872 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.0174536777374,
            "unit": "iter/sec",
            "range": "stddev: 0.0002938314958940773",
            "extra": "mean: 3.5840051825395505 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 93.94567713074937,
            "unit": "iter/sec",
            "range": "stddev: 0.013390792931734766",
            "extra": "mean: 10.644449330097913 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.53220594657499,
            "unit": "iter/sec",
            "range": "stddev: 0.0007291320686180054",
            "extra": "mean: 10.467674121952502 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146395.17441695867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016887012286730253",
            "extra": "mean: 6.830826248082658 usec\nrounds: 30768"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7305967359413398,
            "unit": "iter/sec",
            "range": "stddev: 0.01597008531315685",
            "extra": "mean: 1.368744138599999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.15786174420272,
            "unit": "iter/sec",
            "range": "stddev: 0.00038381132152075437",
            "extra": "mean: 14.890289446809602 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 83.21253785269975,
            "unit": "iter/sec",
            "range": "stddev: 0.00023315611640811783",
            "extra": "mean: 12.01741980000861 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4515.2480740711235,
            "unit": "iter/sec",
            "range": "stddev: 0.00006220258394829766",
            "extra": "mean: 221.47177377529138 usec\nrounds: 2082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4814.441445523274,
            "unit": "iter/sec",
            "range": "stddev: 0.00006172278071384878",
            "extra": "mean: 207.70841463444395 usec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4961.4478906081595,
            "unit": "iter/sec",
            "range": "stddev: 0.00005794097708038361",
            "extra": "mean: 201.55406688699958 usec\nrounds: 3334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 77.42017211648322,
            "unit": "iter/sec",
            "range": "stddev: 0.015303582547362743",
            "extra": "mean: 12.916530313255322 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.9761459138433,
            "unit": "iter/sec",
            "range": "stddev: 0.00018675948995407616",
            "extra": "mean: 8.405046173912467 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.21503176813815,
            "unit": "iter/sec",
            "range": "stddev: 0.00020787813360770662",
            "extra": "mean: 11.598905428572406 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1698112.969259459,
            "unit": "iter/sec",
            "range": "stddev: 3.88561247672999e-7",
            "extra": "mean: 588.8889715247252 nsec\nrounds: 149232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 411085.49439463986,
            "unit": "iter/sec",
            "range": "stddev: 8.881764114283177e-7",
            "extra": "mean: 2.4325840090090978 usec\nrounds: 1851"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 307.95853873315053,
            "unit": "iter/sec",
            "range": "stddev: 0.0001581677110847143",
            "extra": "mean: 3.247190365669682 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1664344.5625007201,
            "unit": "iter/sec",
            "range": "stddev: 4.012276495759768e-7",
            "extra": "mean: 600.8371238329847 nsec\nrounds: 133316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.35322729372996,
            "unit": "iter/sec",
            "range": "stddev: 0.0012428410033631793",
            "extra": "mean: 26.073425121214804 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1655391.2364066942,
            "unit": "iter/sec",
            "range": "stddev: 3.9110177354636333e-7",
            "extra": "mean: 604.086803172082 nsec\nrounds: 131562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 107.22979155624641,
            "unit": "iter/sec",
            "range": "stddev: 0.0007113452931421433",
            "extra": "mean: 9.325766519609983 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.57976969800904,
            "unit": "iter/sec",
            "range": "stddev: 0.00027917568029014783",
            "extra": "mean: 3.538823749020295 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.72487540239511,
            "unit": "iter/sec",
            "range": "stddev: 0.001418837951884671",
            "extra": "mean: 72.86040642857066 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 269.30711087745914,
            "unit": "iter/sec",
            "range": "stddev: 0.0002621782844177429",
            "extra": "mean: 3.713232809715978 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 281.934343100078,
            "unit": "iter/sec",
            "range": "stddev: 0.00029165859679576594",
            "extra": "mean: 3.5469251067615795 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.83729180380413,
            "unit": "iter/sec",
            "range": "stddev: 0.0002628321500691547",
            "extra": "mean: 6.904299214283812 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7388.003892195263,
            "unit": "iter/sec",
            "range": "stddev: 0.00001635700672712904",
            "extra": "mean: 135.35455781992843 usec\nrounds: 4220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 97.36459920094717,
            "unit": "iter/sec",
            "range": "stddev: 0.0007833266489805043",
            "extra": "mean: 10.270673409091298 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10703.308032985333,
            "unit": "iter/sec",
            "range": "stddev: 0.00002895589415262052",
            "extra": "mean: 93.42905921404966 usec\nrounds: 5269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 261.2530724722828,
            "unit": "iter/sec",
            "range": "stddev: 0.00015869939184595355",
            "extra": "mean: 3.827706179823372 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.79529962854318,
            "unit": "iter/sec",
            "range": "stddev: 0.0008116833424506972",
            "extra": "mean: 10.77640790000108 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.27777910410794,
            "unit": "iter/sec",
            "range": "stddev: 0.0008843219178525847",
            "extra": "mean: 12.153949837837471 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6207665.765316471,
            "unit": "iter/sec",
            "range": "stddev: 2.5999188034751112e-8",
            "extra": "mean: 161.09114726939168 nsec\nrounds: 72459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1534.369131552645,
            "unit": "iter/sec",
            "range": "stddev: 0.00005733451410761372",
            "extra": "mean: 651.7336535492532 usec\nrounds: 1169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12329.963990344822,
            "unit": "iter/sec",
            "range": "stddev: 0.000005923436499594739",
            "extra": "mean: 81.10323767231324 usec\nrounds: 5516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4988.938740900933,
            "unit": "iter/sec",
            "range": "stddev: 0.00005709392072058274",
            "extra": "mean: 200.4434313457643 usec\nrounds: 2163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.74330967332165,
            "unit": "iter/sec",
            "range": "stddev: 0.0007583048573681116",
            "extra": "mean: 23.395474230769562 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1581904.8184089505,
            "unit": "iter/sec",
            "range": "stddev: 4.119998997574708e-7",
            "extra": "mean: 632.1492850662031 nsec\nrounds: 117634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.075232786536677,
            "unit": "iter/sec",
            "range": "stddev: 0.0005356873998563882",
            "extra": "mean: 43.33650755555772 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 595.276034385449,
            "unit": "iter/sec",
            "range": "stddev: 0.00008180378785353259",
            "extra": "mean: 1.679892927375079 msec\nrounds: 537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 280.7484366753225,
            "unit": "iter/sec",
            "range": "stddev: 0.0002846764535869249",
            "extra": "mean: 3.5619076346147964 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.8818410636032,
            "unit": "iter/sec",
            "range": "stddev: 0.0002674060583196107",
            "extra": "mean: 3.7610691877253246 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 92.50690849216484,
            "unit": "iter/sec",
            "range": "stddev: 0.000831837659366597",
            "extra": "mean: 10.810003450549837 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 652804.1907606891,
            "unit": "iter/sec",
            "range": "stddev: 7.821581157430707e-7",
            "extra": "mean: 1.5318529111075958 usec\nrounds: 20491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 257.80961750629274,
            "unit": "iter/sec",
            "range": "stddev: 0.00017660763402678223",
            "extra": "mean: 3.878831246377345 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5329412.147963067,
            "unit": "iter/sec",
            "range": "stddev: 4.894684424626333e-8",
            "extra": "mean: 187.63795560127886 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.3362364942523,
            "unit": "iter/sec",
            "range": "stddev: 0.00028712279396578586",
            "extra": "mean: 9.677147474357858 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4931469069262164,
            "unit": "iter/sec",
            "range": "stddev: 0.004604385557526786",
            "extra": "mean: 669.7264651999944 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15311952606804943,
            "unit": "iter/sec",
            "range": "stddev: 0.18094124288883803",
            "extra": "mean: 6.53084571039999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 195.6603957644667,
            "unit": "iter/sec",
            "range": "stddev: 0.004139420644492209",
            "extra": "mean: 5.110896336956133 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 144.0499698496836,
            "unit": "iter/sec",
            "range": "stddev: 0.00024557566409981403",
            "extra": "mean: 6.942035468966094 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 98.84017408253068,
            "unit": "iter/sec",
            "range": "stddev: 0.00035011766493744717",
            "extra": "mean: 10.117343572918122 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7751427123386673,
            "unit": "iter/sec",
            "range": "stddev: 0.02386694834237027",
            "extra": "mean: 1.290085018000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7895372258755804,
            "unit": "iter/sec",
            "range": "stddev: 0.015225622849119443",
            "extra": "mean: 1.2665647258000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.266632609816626,
            "unit": "iter/sec",
            "range": "stddev: 0.0030942511387479607",
            "extra": "mean: 441.1830993999956 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4493.043591254448,
            "unit": "iter/sec",
            "range": "stddev: 0.000030531200463692476",
            "extra": "mean: 222.56628044883985 usec\nrounds: 1872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4448.387736016832,
            "unit": "iter/sec",
            "range": "stddev: 0.000060945671550991025",
            "extra": "mean: 224.80054782621497 usec\nrounds: 2070"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 87.86259018397584,
            "unit": "iter/sec",
            "range": "stddev: 0.019839387215414134",
            "extra": "mean: 11.381408149999857 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 664.3518674601304,
            "unit": "iter/sec",
            "range": "stddev: 0.00011207151952622195",
            "extra": "mean: 1.5052264454724555 msec\nrounds: 541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11619.633905838407,
            "unit": "iter/sec",
            "range": "stddev: 0.000008699532160298864",
            "extra": "mean: 86.06123119744242 usec\nrounds: 5571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 179.94696540309107,
            "unit": "iter/sec",
            "range": "stddev: 0.00024973280152820553",
            "extra": "mean: 5.5571929082546365 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4852027.900133637,
            "unit": "iter/sec",
            "range": "stddev: 5.043925088303123e-8",
            "extra": "mean: 206.09939196207364 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4608.979981546537,
            "unit": "iter/sec",
            "range": "stddev: 0.00009203677903330596",
            "extra": "mean: 216.96774644363967 usec\nrounds: 1968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1053.1217564021933,
            "unit": "iter/sec",
            "range": "stddev: 0.00006185229382976114",
            "extra": "mean: 949.5578207560022 usec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.0689405788594,
            "unit": "iter/sec",
            "range": "stddev: 0.00024369288185687677",
            "extra": "mean: 7.088732614682016 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6131572003172733,
            "unit": "iter/sec",
            "range": "stddev: 0.020074875335641628",
            "extra": "mean: 1.6309031345999982 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}