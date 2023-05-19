window.BENCHMARK_DATA = {
  "lastUpdate": 1684501598646,
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
          "id": "91ff8d44f45d358e7a85051f907d0853bc001776",
          "message": "refactor(ir): simplify `Expr._find_backends()` implementation by using the `ibis.common.graph` utilities",
          "timestamp": "2023-05-19T14:52:25+02:00",
          "tree_id": "5af284306864cf0bc7a07de9feb78ef1fbbda044",
          "url": "https://github.com/ibis-project/ibis/commit/91ff8d44f45d358e7a85051f907d0853bc001776"
        },
        "date": 1684501509487,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9006867044574276,
            "unit": "iter/sec",
            "range": "stddev: 0.0029599213053714177",
            "extra": "mean: 1.1102639741999951 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 169.5484741379977,
            "unit": "iter/sec",
            "range": "stddev: 0.00424325441380377",
            "extra": "mean: 5.898018281108723 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3449072829916502,
            "unit": "iter/sec",
            "range": "stddev: 0.0014283220529770998",
            "extra": "mean: 743.5456798000018 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1747.418247364351,
            "unit": "iter/sec",
            "range": "stddev: 0.000018432308652402846",
            "extra": "mean: 572.2728382333826 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.29489761436407,
            "unit": "iter/sec",
            "range": "stddev: 0.000884810394612839",
            "extra": "mean: 24.817037868425466 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4643191.511450556,
            "unit": "iter/sec",
            "range": "stddev: 1.354984476658124e-8",
            "extra": "mean: 215.36910496453984 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2286.280614043581,
            "unit": "iter/sec",
            "range": "stddev: 0.00016958706847592544",
            "extra": "mean: 437.39162806938714 usec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.41808054517701,
            "unit": "iter/sec",
            "range": "stddev: 0.0001838384247458991",
            "extra": "mean: 20.65344162222497 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 89.45047504640561,
            "unit": "iter/sec",
            "range": "stddev: 0.007571096136502814",
            "extra": "mean: 11.179370478258663 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2257.7747450210495,
            "unit": "iter/sec",
            "range": "stddev: 0.000116396911746998",
            "extra": "mean: 442.9139807703345 usec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 428.3198188570593,
            "unit": "iter/sec",
            "range": "stddev: 0.00009772802433193291",
            "extra": "mean: 2.334704013156403 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1080520.5452318352,
            "unit": "iter/sec",
            "range": "stddev: 2.5832454578077556e-7",
            "extra": "mean: 925.4798572899334 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7371450.602223555,
            "unit": "iter/sec",
            "range": "stddev: 4.505300329256072e-9",
            "extra": "mean: 135.65850928970158 nsec\nrounds: 63292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5801426.487188314,
            "unit": "iter/sec",
            "range": "stddev: 9.998945554629266e-9",
            "extra": "mean: 172.37139903625177 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1175.5769423086067,
            "unit": "iter/sec",
            "range": "stddev: 0.00014019831183843313",
            "extra": "mean: 850.6461499969475 usec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1850656.8595448262,
            "unit": "iter/sec",
            "range": "stddev: 8.663140359542785e-8",
            "extra": "mean: 540.3486847615568 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.307803104934326,
            "unit": "iter/sec",
            "range": "stddev: 0.00030925914079135133",
            "extra": "mean: 51.79253147368375 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.87109656532432,
            "unit": "iter/sec",
            "range": "stddev: 0.0007239367555063243",
            "extra": "mean: 16.702550268290427 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 103.93436871268389,
            "unit": "iter/sec",
            "range": "stddev: 0.0001864433387697229",
            "extra": "mean: 9.621456428569834 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 269.47559415445363,
            "unit": "iter/sec",
            "range": "stddev: 0.0002642955355768502",
            "extra": "mean: 3.7109111982394825 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 46.349834186610245,
            "unit": "iter/sec",
            "range": "stddev: 0.0005443340366059202",
            "extra": "mean: 21.575050214287167 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12689112.845732696,
            "unit": "iter/sec",
            "range": "stddev: 4.189971242803847e-9",
            "extra": "mean: 78.80771588657537 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9232.424803466032,
            "unit": "iter/sec",
            "range": "stddev: 0.00001914564753258268",
            "extra": "mean: 108.31390683242613 usec\nrounds: 2898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6446846.833034622,
            "unit": "iter/sec",
            "range": "stddev: 4.831934928315194e-9",
            "extra": "mean: 155.11458948836525 nsec\nrounds: 64103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.898820770612854,
            "unit": "iter/sec",
            "range": "stddev: 0.024065181693130575",
            "extra": "mean: 38.61179660869696 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.81909223948213,
            "unit": "iter/sec",
            "range": "stddev: 0.00009041086298412115",
            "extra": "mean: 9.540246711117106 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141321.11444140968,
            "unit": "iter/sec",
            "range": "stddev: 4.3758721637642107e-7",
            "extra": "mean: 7.07608345683256 usec\nrounds: 39841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.17686879750251,
            "unit": "iter/sec",
            "range": "stddev: 0.00008501457575577816",
            "extra": "mean: 8.994676777787289 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 280.873100179434,
            "unit": "iter/sec",
            "range": "stddev: 0.0002289613046841258",
            "extra": "mean: 3.560326707545708 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.29463011891131,
            "unit": "iter/sec",
            "range": "stddev: 0.0006618291173863892",
            "extra": "mean: 9.77568420588217 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17565265524207044,
            "unit": "iter/sec",
            "range": "stddev: 0.0588963455856919",
            "extra": "mean: 5.693053706599994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 282.4878732002757,
            "unit": "iter/sec",
            "range": "stddev: 0.000252793539960656",
            "extra": "mean: 3.5399749683804265 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11762.303831811867,
            "unit": "iter/sec",
            "range": "stddev: 0.000013165455929030263",
            "extra": "mean: 85.01735835929006 usec\nrounds: 5168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.3857780819919,
            "unit": "iter/sec",
            "range": "stddev: 0.00002168502080288971",
            "extra": "mean: 1.4547871542968105 msec\nrounds: 512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2339.5654958852215,
            "unit": "iter/sec",
            "range": "stddev: 0.00007927635662386026",
            "extra": "mean: 427.4297948737827 usec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.312122153928303,
            "unit": "iter/sec",
            "range": "stddev: 0.0007109735694639041",
            "extra": "mean: 38.00529634781677 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4063863815872044,
            "unit": "iter/sec",
            "range": "stddev: 0.0023587120248471823",
            "extra": "mean: 415.5608624000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.2282220973722,
            "unit": "iter/sec",
            "range": "stddev: 0.0002710376186261913",
            "extra": "mean: 3.659944028928399 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.534331317554766,
            "unit": "iter/sec",
            "range": "stddev: 0.00014125716342832268",
            "extra": "mean: 117.17379637500613 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6421939.177101382,
            "unit": "iter/sec",
            "range": "stddev: 1.1667528079686943e-8",
            "extra": "mean: 155.7162054049467 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 102.26449254695912,
            "unit": "iter/sec",
            "range": "stddev: 0.0007358676549273829",
            "extra": "mean: 9.778565121621341 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.12512613894674,
            "unit": "iter/sec",
            "range": "stddev: 0.016799747198386776",
            "extra": "mean: 12.176541419347219 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2423.1537788873875,
            "unit": "iter/sec",
            "range": "stddev: 0.00007663759961267996",
            "extra": "mean: 412.6853230335051 usec\nrounds: 1424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.253797084294693,
            "unit": "iter/sec",
            "range": "stddev: 0.024862602607530402",
            "extra": "mean: 31.99611225806892 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 255.69593989248645,
            "unit": "iter/sec",
            "range": "stddev: 0.00023812269926506047",
            "extra": "mean: 3.9108951061971267 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 86.5298265036151,
            "unit": "iter/sec",
            "range": "stddev: 0.000551507056492632",
            "extra": "mean: 11.556708714286183 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2297.906807671339,
            "unit": "iter/sec",
            "range": "stddev: 0.00008817055355581882",
            "extra": "mean: 435.17865766426956 usec\nrounds: 1370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.77577038413446,
            "unit": "iter/sec",
            "range": "stddev: 0.0006806167206714836",
            "extra": "mean: 9.544191336735079 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 248.85816469989297,
            "unit": "iter/sec",
            "range": "stddev: 0.004050580861006257",
            "extra": "mean: 4.018353190082938 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.73606295450293,
            "unit": "iter/sec",
            "range": "stddev: 0.00032622495299089324",
            "extra": "mean: 17.62547395651876 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.55714561847952,
            "unit": "iter/sec",
            "range": "stddev: 0.00011827155313098735",
            "extra": "mean: 10.250402404255844 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.49862489911492,
            "unit": "iter/sec",
            "range": "stddev: 0.0007638481061993951",
            "extra": "mean: 10.362841968426556 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 232.3014923790954,
            "unit": "iter/sec",
            "range": "stddev: 0.0003264206782766765",
            "extra": "mean: 4.304750648644516 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.9779973447055,
            "unit": "iter/sec",
            "range": "stddev: 0.0002612553150345831",
            "extra": "mean: 3.636654603846086 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 266.0229742696489,
            "unit": "iter/sec",
            "range": "stddev: 0.00035031735573740096",
            "extra": "mean: 3.75907382715889 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2286.912706280257,
            "unit": "iter/sec",
            "range": "stddev: 0.00008663339622700936",
            "extra": "mean: 437.2707350192367 usec\nrounds: 1819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.10930365508754,
            "unit": "iter/sec",
            "range": "stddev: 0.0001843497327608129",
            "extra": "mean: 18.14575640909378 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13576.56045214391,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025433449082850864",
            "extra": "mean: 73.65635821568395 usec\nrounds: 6725"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 156.4399404057807,
            "unit": "iter/sec",
            "range": "stddev: 0.013144576201931124",
            "extra": "mean: 6.3922294869593825 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4762.3043058210005,
            "unit": "iter/sec",
            "range": "stddev: 0.00001863484413009883",
            "extra": "mean: 209.98238159155275 usec\nrounds: 2086"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1607454.9099777688,
            "unit": "iter/sec",
            "range": "stddev: 1.1118089923008232e-7",
            "extra": "mean: 622.1014311461029 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.2236476631364,
            "unit": "iter/sec",
            "range": "stddev: 0.00010391890619265876",
            "extra": "mean: 1.8614221550929297 msec\nrounds: 432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 96.18047658064387,
            "unit": "iter/sec",
            "range": "stddev: 0.0007437332469416098",
            "extra": "mean: 10.397120450547321 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2386.0833629862773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000948959762790018",
            "extra": "mean: 419.09684108792436 usec\nrounds: 1397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8127.548608702091,
            "unit": "iter/sec",
            "range": "stddev: 0.000012880392784454744",
            "extra": "mean: 123.03832903925166 usec\nrounds: 4735"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 101.48505678260719,
            "unit": "iter/sec",
            "range": "stddev: 0.0007295066582147768",
            "extra": "mean: 9.85366744329775 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.24317699544355,
            "unit": "iter/sec",
            "range": "stddev: 0.00012967354764488288",
            "extra": "mean: 5.805745211181593 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.12408997795505,
            "unit": "iter/sec",
            "range": "stddev: 0.0008174010122705378",
            "extra": "mean: 9.987606381443031 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.25018518053211,
            "unit": "iter/sec",
            "range": "stddev: 0.0007269150190781386",
            "extra": "mean: 9.97504391836468 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5747010355758384,
            "unit": "iter/sec",
            "range": "stddev: 0.0035335612663846545",
            "extra": "mean: 635.0411775999873 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 237.10505209166996,
            "unit": "iter/sec",
            "range": "stddev: 0.010142573289082177",
            "extra": "mean: 4.217539825399327 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.71880389597399,
            "unit": "iter/sec",
            "range": "stddev: 0.0008742158823490429",
            "extra": "mean: 9.928632602039595 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.19727475454894,
            "unit": "iter/sec",
            "range": "stddev: 0.00017816944089975027",
            "extra": "mean: 6.127553303227732 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2526301.7184687066,
            "unit": "iter/sec",
            "range": "stddev: 1.6675086318186034e-8",
            "extra": "mean: 395.83553804708197 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.30878180604135,
            "unit": "iter/sec",
            "range": "stddev: 0.01627604758607428",
            "extra": "mean: 11.861160588235927 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2327.7953039346216,
            "unit": "iter/sec",
            "range": "stddev: 0.00008709186188229365",
            "extra": "mean: 429.5910376267714 usec\nrounds: 1568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 102.91580556244138,
            "unit": "iter/sec",
            "range": "stddev: 0.000780675635321319",
            "extra": "mean: 9.716680489793934 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.30841977335707,
            "unit": "iter/sec",
            "range": "stddev: 0.0008736880790224742",
            "extra": "mean: 9.969252852945552 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2344.6686531206897,
            "unit": "iter/sec",
            "range": "stddev: 0.00009980530820528522",
            "extra": "mean: 426.49949649347144 usec\nrounds: 1283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 186.43241638690145,
            "unit": "iter/sec",
            "range": "stddev: 0.00005947390286424598",
            "extra": "mean: 5.36387404819508 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.67893094794347,
            "unit": "iter/sec",
            "range": "stddev: 0.0006725874098842918",
            "extra": "mean: 10.032210322583035 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 757.9604173332552,
            "unit": "iter/sec",
            "range": "stddev: 0.000012144410070632865",
            "extra": "mean: 1.3193301089762928 msec\nrounds: 624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1851117.136183899,
            "unit": "iter/sec",
            "range": "stddev: 1.155746361228169e-7",
            "extra": "mean: 540.2143281226992 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.89957430368922,
            "unit": "iter/sec",
            "range": "stddev: 0.000026136691336845764",
            "extra": "mean: 9.354574202130278 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7587493854920947,
            "unit": "iter/sec",
            "range": "stddev: 0.0036025292088713856",
            "extra": "mean: 1.3179582338000047 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.226497759852,
            "unit": "iter/sec",
            "range": "stddev: 0.00015722938167795408",
            "extra": "mean: 6.569158554626739 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8919928193364983,
            "unit": "iter/sec",
            "range": "stddev: 0.0034547384250933587",
            "extra": "mean: 1.1210852579999937 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 88.50294065636392,
            "unit": "iter/sec",
            "range": "stddev: 0.013666277840345485",
            "extra": "mean: 11.299059585859013 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.40784571570619,
            "unit": "iter/sec",
            "range": "stddev: 0.0008591147194861037",
            "extra": "mean: 9.959381090909872 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.03262071613844,
            "unit": "iter/sec",
            "range": "stddev: 0.0009480949979188861",
            "extra": "mean: 10.52270254639184 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 392.4792908604481,
            "unit": "iter/sec",
            "range": "stddev: 0.00002842438796860222",
            "extra": "mean: 2.547905133561722 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.02196336304651,
            "unit": "iter/sec",
            "range": "stddev: 0.00015917245910916192",
            "extra": "mean: 8.1286298207494 msec\nrounds: 106"
          }
        ]
      }
    ]
  }
}