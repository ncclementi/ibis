window.BENCHMARK_DATA = {
  "lastUpdate": 1676485328576,
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
          "id": "41938674a7ed8c5b1415a652a6d09627c277fc19",
          "message": "feat(duckdb): use `read_json_auto` when reading json",
          "timestamp": "2023-02-15T13:15:32-05:00",
          "tree_id": "3489cf65ffdd5b69855fac99666bb7cc7e68e93e",
          "url": "https://github.com/ibis-project/ibis/commit/41938674a7ed8c5b1415a652a6d09627c277fc19"
        },
        "date": 1676485251254,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 232.5184898642998,
            "unit": "iter/sec",
            "range": "stddev: 0.0003281165925352818",
            "extra": "mean: 4.300733247423077 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5261.374746881759,
            "unit": "iter/sec",
            "range": "stddev: 0.00005322916636040302",
            "extra": "mean: 190.06439345394784 usec\nrounds: 2872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1504222.4730404369,
            "unit": "iter/sec",
            "range": "stddev: 1.2186993063713864e-7",
            "extra": "mean: 664.7952799021357 nsec\nrounds: 70423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10893.505474387988,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018176962915252063",
            "extra": "mean: 91.79781497802766 usec\nrounds: 4313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 137.19078705698664,
            "unit": "iter/sec",
            "range": "stddev: 0.00024053367397365875",
            "extra": "mean: 7.289119199998595 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 118960.43585277011,
            "unit": "iter/sec",
            "range": "stddev: 3.827461692501427e-7",
            "extra": "mean: 8.406156154619653 usec\nrounds: 34722"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 73.56640872637068,
            "unit": "iter/sec",
            "range": "stddev: 0.015864006467839753",
            "extra": "mean: 13.593160483332648 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 36.09823985995585,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068552862628411",
            "extra": "mean: 27.702181709676942 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 210.7735485538898,
            "unit": "iter/sec",
            "range": "stddev: 0.00043611306951906706",
            "extra": "mean: 4.744428353846895 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.855622319013503,
            "unit": "iter/sec",
            "range": "stddev: 0.00008465916872971517",
            "extra": "mean: 205.94682500000658 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 358114.4237716076,
            "unit": "iter/sec",
            "range": "stddev: 5.071000151830313e-7",
            "extra": "mean: 2.792403582821796 usec\nrounds: 1898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 156.48251100601323,
            "unit": "iter/sec",
            "range": "stddev: 0.0007160449849449707",
            "extra": "mean: 6.390490499999533 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 76.60287763114201,
            "unit": "iter/sec",
            "range": "stddev: 0.018381482409784967",
            "extra": "mean: 13.054339875000487 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7231856299576443,
            "unit": "iter/sec",
            "range": "stddev: 0.003145476282451498",
            "extra": "mean: 1.3827708385999984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.43759279528823,
            "unit": "iter/sec",
            "range": "stddev: 0.0008007736571323448",
            "extra": "mean: 10.936420890243841 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57329.65567827584,
            "unit": "iter/sec",
            "range": "stddev: 5.397992895852212e-7",
            "extra": "mean: 17.44297934757934 usec\nrounds: 4600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18909.59349615068,
            "unit": "iter/sec",
            "range": "stddev: 0.000017466538443429927",
            "extra": "mean: 52.88320979525892 usec\nrounds: 4390"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1442.331940793033,
            "unit": "iter/sec",
            "range": "stddev: 0.000022116215441604755",
            "extra": "mean: 693.3216770129718 usec\nrounds: 1031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.11545099784649,
            "unit": "iter/sec",
            "range": "stddev: 0.0007697358512643232",
            "extra": "mean: 29.31223157692168 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.58453342248716,
            "unit": "iter/sec",
            "range": "stddev: 0.00028597206831829845",
            "extra": "mean: 15.978388673913026 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4439.816295929846,
            "unit": "iter/sec",
            "range": "stddev: 0.000052230552198296745",
            "extra": "mean: 225.23454425732422 usec\nrounds: 1367"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.90043451447977,
            "unit": "iter/sec",
            "range": "stddev: 0.0017821146185431178",
            "extra": "mean: 45.661194499992064 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.62369226105918,
            "unit": "iter/sec",
            "range": "stddev: 0.000491312108406844",
            "extra": "mean: 11.544185821429597 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 381.9843067193712,
            "unit": "iter/sec",
            "range": "stddev: 0.00016737948688117787",
            "extra": "mean: 2.6179085957441193 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.36610936818688,
            "unit": "iter/sec",
            "range": "stddev: 0.0013214119306781413",
            "extra": "mean: 19.468089218751317 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.75057657644301,
            "unit": "iter/sec",
            "range": "stddev: 0.0006729267884089421",
            "extra": "mean: 10.89911406896543 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 235.13926141525678,
            "unit": "iter/sec",
            "range": "stddev: 0.00031961196560021884",
            "extra": "mean: 4.2527989327736995 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3988.3929377441495,
            "unit": "iter/sec",
            "range": "stddev: 0.00004756680278404603",
            "extra": "mean: 250.72755257800745 usec\nrounds: 485"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 240.96238743190895,
            "unit": "iter/sec",
            "range": "stddev: 0.00011473432490894815",
            "extra": "mean: 4.150025282607975 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 241.71979010097704,
            "unit": "iter/sec",
            "range": "stddev: 0.00024731842031632467",
            "extra": "mean: 4.137021629806379 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.85501125961665,
            "unit": "iter/sec",
            "range": "stddev: 0.00005963413206190789",
            "extra": "mean: 5.852915829787899 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 139.04538872252138,
            "unit": "iter/sec",
            "range": "stddev: 0.0006914679427031537",
            "extra": "mean: 7.191896179999162 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10388225.341686934,
            "unit": "iter/sec",
            "range": "stddev: 3.5801033423899465e-9",
            "extra": "mean: 96.26283288133905 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1490863.9382188846,
            "unit": "iter/sec",
            "range": "stddev: 2.603974604864082e-7",
            "extra": "mean: 670.7520212707584 nsec\nrounds: 66667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4518.608757888724,
            "unit": "iter/sec",
            "range": "stddev: 0.000049259439141501324",
            "extra": "mean: 221.30705568482108 usec\nrounds: 1724"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 246.93291546469422,
            "unit": "iter/sec",
            "range": "stddev: 0.00022280970914855024",
            "extra": "mean: 4.049682878923353 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 589801.6251054354,
            "unit": "iter/sec",
            "range": "stddev: 2.4848632100180123e-7",
            "extra": "mean: 1.6954853249535142 usec\nrounds: 20409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.50513172027694,
            "unit": "iter/sec",
            "range": "stddev: 0.0007959826031622454",
            "extra": "mean: 12.738020790323853 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5305.3560626803155,
            "unit": "iter/sec",
            "range": "stddev: 0.00006251806200522731",
            "extra": "mean: 188.4887627117699 usec\nrounds: 2183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10549.38095570369,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021805022018103674",
            "extra": "mean: 94.79229200262544 usec\nrounds: 1363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 154.25098108623186,
            "unit": "iter/sec",
            "range": "stddev: 0.0007641264811737317",
            "extra": "mean: 6.482940937931305 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.935504901687448,
            "unit": "iter/sec",
            "range": "stddev: 0.0023753914964622595",
            "extra": "mean: 111.91309399999909 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4599544.568163105,
            "unit": "iter/sec",
            "range": "stddev: 1.324640380757493e-8",
            "extra": "mean: 217.41282972269565 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 270.98433802018747,
            "unit": "iter/sec",
            "range": "stddev: 0.00003928288985793916",
            "extra": "mean: 3.690250172043165 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 142.01612068539185,
            "unit": "iter/sec",
            "range": "stddev: 0.0007701286084037485",
            "extra": "mean: 7.041454133332502 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1652982.4083411882,
            "unit": "iter/sec",
            "range": "stddev: 7.607447211335221e-8",
            "extra": "mean: 604.967115774406 nsec\nrounds: 94331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 154.35840609678036,
            "unit": "iter/sec",
            "range": "stddev: 0.0008345690823357017",
            "extra": "mean: 6.478429165516359 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 229.17215616343793,
            "unit": "iter/sec",
            "range": "stddev: 0.00027804569530115664",
            "extra": "mean: 4.363531838862804 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 267.49236726515625,
            "unit": "iter/sec",
            "range": "stddev: 0.000015183885371778645",
            "extra": "mean: 3.7384244276724856 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5177.569195534127,
            "unit": "iter/sec",
            "range": "stddev: 0.00004640201132750331",
            "extra": "mean: 193.14082771941366 usec\nrounds: 1811"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8009423877882681,
            "unit": "iter/sec",
            "range": "stddev: 0.02897181670850506",
            "extra": "mean: 1.248529251599996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9702.14198755206,
            "unit": "iter/sec",
            "range": "stddev: 0.000013887847351640044",
            "extra": "mean: 103.07002322610919 usec\nrounds: 3143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.261601507598595,
            "unit": "iter/sec",
            "range": "stddev: 0.0007182734115633213",
            "extra": "mean: 75.40567400000843 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4826578.638860713,
            "unit": "iter/sec",
            "range": "stddev: 7.51015196858797e-9",
            "extra": "mean: 207.18609906164338 nsec\nrounds: 50252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 240.7692228893452,
            "unit": "iter/sec",
            "range": "stddev: 0.00023321043541690896",
            "extra": "mean: 4.153354768518685 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.83930914753252,
            "unit": "iter/sec",
            "range": "stddev: 0.0005031906952225076",
            "extra": "mean: 12.3702195199985 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.09254147481226,
            "unit": "iter/sec",
            "range": "stddev: 0.00008502916530722436",
            "extra": "mean: 8.467935294739068 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.766142875136616,
            "unit": "iter/sec",
            "range": "stddev: 0.0007050864914246021",
            "extra": "mean: 18.951546304348117 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4323868.6469249,
            "unit": "iter/sec",
            "range": "stddev: 1.3359366033714714e-8",
            "extra": "mean: 231.27437062917264 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 136.52186591148524,
            "unit": "iter/sec",
            "range": "stddev: 0.00029029898064418985",
            "extra": "mean: 7.324833962116779 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 954.1074573693297,
            "unit": "iter/sec",
            "range": "stddev: 0.000027643858428535272",
            "extra": "mean: 1.0480999726772973 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.63202242466768,
            "unit": "iter/sec",
            "range": "stddev: 0.0007155339563610604",
            "extra": "mean: 11.543075782047762 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5278.665424884589,
            "unit": "iter/sec",
            "range": "stddev: 0.00005782921784706848",
            "extra": "mean: 189.44182279214328 usec\nrounds: 1834"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.45835677245067,
            "unit": "iter/sec",
            "range": "stddev: 0.00163421455625811",
            "extra": "mean: 28.202096516129277 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.53220015359487,
            "unit": "iter/sec",
            "range": "stddev: 0.03201667261555478",
            "extra": "mean: 32.752307235293024 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12848355167285821,
            "unit": "iter/sec",
            "range": "stddev: 0.18485587355917707",
            "extra": "mean: 7.7830974235999975 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1538408.040663425,
            "unit": "iter/sec",
            "range": "stddev: 1.094717390284859e-7",
            "extra": "mean: 650.0226036057109 nsec\nrounds: 89278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 267.61349039194926,
            "unit": "iter/sec",
            "range": "stddev: 0.00016647833462188057",
            "extra": "mean: 3.7367323991604104 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 99.02561084138242,
            "unit": "iter/sec",
            "range": "stddev: 0.00012406163864374636",
            "extra": "mean: 10.098397692307937 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.54274803413837,
            "unit": "iter/sec",
            "range": "stddev: 0.0008154194940832244",
            "extra": "mean: 11.82833564383547 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2115230007386613,
            "unit": "iter/sec",
            "range": "stddev: 0.005277997559632396",
            "extra": "mean: 452.1770741999944 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5598220088469298,
            "unit": "iter/sec",
            "range": "stddev: 0.08663051549157354",
            "extra": "mean: 1.7862820400000146 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5268032479769544,
            "unit": "iter/sec",
            "range": "stddev: 0.001480001693426513",
            "extra": "mean: 654.9632386000098 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 505.2488241274153,
            "unit": "iter/sec",
            "range": "stddev: 0.00007044379155713202",
            "extra": "mean: 1.979222815069465 msec\nrounds: 438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 86.82345208680161,
            "unit": "iter/sec",
            "range": "stddev: 0.0008886089277145947",
            "extra": "mean: 11.517625433739395 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4567.871726888813,
            "unit": "iter/sec",
            "range": "stddev: 0.00005846790500286039",
            "extra": "mean: 218.92033309812362 usec\nrounds: 2837"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 608.2659856057282,
            "unit": "iter/sec",
            "range": "stddev: 0.000012449821965424145",
            "extra": "mean: 1.6440176233168324 msec\nrounds: 446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.32407692730537,
            "unit": "iter/sec",
            "range": "stddev: 0.00010382463028787352",
            "extra": "mean: 14.85352708333115 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 122.76243679569009,
            "unit": "iter/sec",
            "range": "stddev: 0.017388635700384167",
            "extra": "mean: 8.145814192856651 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 150.57059582796464,
            "unit": "iter/sec",
            "range": "stddev: 0.0008646486783505618",
            "extra": "mean: 6.641402954548683 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7968299852937185,
            "unit": "iter/sec",
            "range": "stddev: 0.016864708715509477",
            "extra": "mean: 1.2549728529999924 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 138.98072073453318,
            "unit": "iter/sec",
            "range": "stddev: 0.00010583126085009703",
            "extra": "mean: 7.195242582675177 msec\nrounds: 127"
          }
        ]
      }
    ]
  }
}