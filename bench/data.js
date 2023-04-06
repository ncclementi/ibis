window.BENCHMARK_DATA = {
  "lastUpdate": 1680806458940,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "anja@voltrondata.com",
            "name": "anjakefala",
            "username": "anjakefala"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "ed08e44139f46a5694521cc62ac407afe2c573dc",
          "message": "test(pandas): memtable for pandas+dask backends supported",
          "timestamp": "2023-04-06T14:35:50-04:00",
          "tree_id": "fa7a9520774a8a7f9991e19fb27fc0911ca1a50e",
          "url": "https://github.com/ibis-project/ibis/commit/ed08e44139f46a5694521cc62ac407afe2c573dc"
        },
        "date": 1680806380746,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.99105188773106,
            "unit": "iter/sec",
            "range": "stddev: 0.0006099533242240208",
            "extra": "mean: 10.310229454543071 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 61.0374837345692,
            "unit": "iter/sec",
            "range": "stddev: 0.00018062617542617847",
            "extra": "mean: 16.383375244442455 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.56405345947022,
            "unit": "iter/sec",
            "range": "stddev: 0.000710390662713724",
            "extra": "mean: 9.846003245617371 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 495737.35272436286,
            "unit": "iter/sec",
            "range": "stddev: 3.5546147283946246e-7",
            "extra": "mean: 2.017197200300568 usec\nrounds: 2358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.04612008942436,
            "unit": "iter/sec",
            "range": "stddev: 0.00012440613143033106",
            "extra": "mean: 6.133233955224076 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2700105.0003720224,
            "unit": "iter/sec",
            "range": "stddev: 1.2681302940553148e-8",
            "extra": "mean: 370.3559675874722 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.23671209924998,
            "unit": "iter/sec",
            "range": "stddev: 0.0006231931593739569",
            "extra": "mean: 10.284181544304944 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1154.781809732788,
            "unit": "iter/sec",
            "range": "stddev: 0.00004164258539480756",
            "extra": "mean: 865.9644545590792 usec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.28973306455678,
            "unit": "iter/sec",
            "range": "stddev: 0.0006773798195028114",
            "extra": "mean: 9.872668924526163 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.5555387088538,
            "unit": "iter/sec",
            "range": "stddev: 0.00024521968073129503",
            "extra": "mean: 3.7236245612648453 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12579.464394565204,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015768464330247402",
            "extra": "mean: 79.49464052158191 usec\nrounds: 5444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 676.4781568327318,
            "unit": "iter/sec",
            "range": "stddev: 0.000021348716782877376",
            "extra": "mean: 1.4782443304333672 msec\nrounds: 575"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.70360333189684,
            "unit": "iter/sec",
            "range": "stddev: 0.0006601901412426861",
            "extra": "mean: 13.567857673075642 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.7693827896893,
            "unit": "iter/sec",
            "range": "stddev: 0.00008169558184963486",
            "extra": "mean: 7.154642741069393 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.26886693678339,
            "unit": "iter/sec",
            "range": "stddev: 0.0007390280139711196",
            "extra": "mean: 22.589238649997867 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2116.418922851671,
            "unit": "iter/sec",
            "range": "stddev: 0.00008425805577764676",
            "extra": "mean: 472.49624788489234 usec\nrounds: 1182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2094.2343497062825,
            "unit": "iter/sec",
            "range": "stddev: 0.00008624317358584514",
            "extra": "mean: 477.5014793068649 usec\nrounds: 1788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.08177026606822,
            "unit": "iter/sec",
            "range": "stddev: 0.00020485049003657072",
            "extra": "mean: 20.374163250002653 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.549940780149786,
            "unit": "iter/sec",
            "range": "stddev: 0.001702291813801846",
            "extra": "mean: 392.16597020000563 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.37253918097828,
            "unit": "iter/sec",
            "range": "stddev: 0.0006958998438130049",
            "extra": "mean: 9.864604439025848 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2071.127228660063,
            "unit": "iter/sec",
            "range": "stddev: 0.00008757613078183854",
            "extra": "mean: 482.828860613725 usec\nrounds: 1564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 280.33136483676395,
            "unit": "iter/sec",
            "range": "stddev: 0.00024077595277062394",
            "extra": "mean: 3.5672069751534825 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 105.2753160064187,
            "unit": "iter/sec",
            "range": "stddev: 0.0004906774115533403",
            "extra": "mean: 9.498902857142973 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.98432683410583,
            "unit": "iter/sec",
            "range": "stddev: 0.0006161007359487621",
            "extra": "mean: 10.205713835163335 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.69221937092891,
            "unit": "iter/sec",
            "range": "stddev: 0.0006583182656438051",
            "extra": "mean: 37.46410090908822 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.82337350999947,
            "unit": "iter/sec",
            "range": "stddev: 0.00013551074183680288",
            "extra": "mean: 6.067100670884717 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8982832770495619,
            "unit": "iter/sec",
            "range": "stddev: 0.015254261718897972",
            "extra": "mean: 1.113234572600004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.3519127083394,
            "unit": "iter/sec",
            "range": "stddev: 0.0006502279994442228",
            "extra": "mean: 10.378621159571942 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 301.5895987533453,
            "unit": "iter/sec",
            "range": "stddev: 0.000026597526002866138",
            "extra": "mean: 3.315764217776784 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2207.49989054111,
            "unit": "iter/sec",
            "range": "stddev: 0.00007923320208586084",
            "extra": "mean: 453.00115496489406 usec\nrounds: 1168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1841373.1011802338,
            "unit": "iter/sec",
            "range": "stddev: 1.0937774646904921e-7",
            "extra": "mean: 543.0729923007167 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6154017.036814943,
            "unit": "iter/sec",
            "range": "stddev: 8.744642571017259e-9",
            "extra": "mean: 162.49548774669367 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2189.632469421542,
            "unit": "iter/sec",
            "range": "stddev: 0.00008182189763888038",
            "extra": "mean: 456.6976485620806 usec\nrounds: 1565"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.42778270083676,
            "unit": "iter/sec",
            "range": "stddev: 0.000593849576631898",
            "extra": "mean: 10.264012710528528 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.33653183348181,
            "unit": "iter/sec",
            "range": "stddev: 0.000664850495389099",
            "extra": "mean: 9.966459690470433 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.10505035616349,
            "unit": "iter/sec",
            "range": "stddev: 0.00012100174836849315",
            "extra": "mean: 10.514688717949802 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.433242653325827,
            "unit": "iter/sec",
            "range": "stddev: 0.0001364787687090049",
            "extra": "mean: 64.79519712498671 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7851.707116983444,
            "unit": "iter/sec",
            "range": "stddev: 0.000017473665980920514",
            "extra": "mean: 127.36083823567161 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2074.895327429407,
            "unit": "iter/sec",
            "range": "stddev: 0.00008687628364233854",
            "extra": "mean: 481.9520227263235 usec\nrounds: 1144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 754660.6896233408,
            "unit": "iter/sec",
            "range": "stddev: 7.245583650122152e-7",
            "extra": "mean: 1.325098834151691 usec\nrounds: 22988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.17422540844666,
            "unit": "iter/sec",
            "range": "stddev: 0.00030849620879706493",
            "extra": "mean: 3.742876014597721 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7020997.44077222,
            "unit": "iter/sec",
            "range": "stddev: 5.817742942741832e-9",
            "extra": "mean: 142.42990521443454 nsec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.46472955277801,
            "unit": "iter/sec",
            "range": "stddev: 0.0006844374441786554",
            "extra": "mean: 9.953742019229358 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70626.57695084362,
            "unit": "iter/sec",
            "range": "stddev: 3.831104450276645e-7",
            "extra": "mean: 14.158975886598665 usec\nrounds: 14266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.64132204665092,
            "unit": "iter/sec",
            "range": "stddev: 0.00028970721258659627",
            "extra": "mean: 18.64234440624557 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6531028973313735,
            "unit": "iter/sec",
            "range": "stddev: 0.0009310022935395648",
            "extra": "mean: 604.923021799982 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1942427.34907547,
            "unit": "iter/sec",
            "range": "stddev: 8.147894301457737e-8",
            "extra": "mean: 514.8197694374343 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11919.357197054427,
            "unit": "iter/sec",
            "range": "stddev: 0.00003023349923644095",
            "extra": "mean: 83.89714172230069 usec\nrounds: 3902"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 520.95271018922,
            "unit": "iter/sec",
            "range": "stddev: 0.00006621121816398763",
            "extra": "mean: 1.9195600300011506 msec\nrounds: 400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13645.628091741784,
            "unit": "iter/sec",
            "range": "stddev: 0.000002506138271215945",
            "extra": "mean: 73.28354497695796 usec\nrounds: 1712"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 102.73860547684501,
            "unit": "iter/sec",
            "range": "stddev: 0.00009834117188734759",
            "extra": "mean: 9.733439492960391 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7870496874907182,
            "unit": "iter/sec",
            "range": "stddev: 0.012285161917492569",
            "extra": "mean: 1.270567812799993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.09992596694303,
            "unit": "iter/sec",
            "range": "stddev: 0.00005933717188867066",
            "extra": "mean: 8.326399803737145 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.98193318609958,
            "unit": "iter/sec",
            "range": "stddev: 0.00007292558596339",
            "extra": "mean: 9.71044113332861 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5452.49616311749,
            "unit": "iter/sec",
            "range": "stddev: 0.000022675207437723244",
            "extra": "mean: 183.40223818300595 usec\nrounds: 1608"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 245.17733013392586,
            "unit": "iter/sec",
            "range": "stddev: 0.0034780662540059007",
            "extra": "mean: 4.078680518520041 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 748.5420075200395,
            "unit": "iter/sec",
            "range": "stddev: 0.00002652686117665268",
            "extra": "mean: 1.3359303685748438 msec\nrounds: 681"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1979385.9334002833,
            "unit": "iter/sec",
            "range": "stddev: 6.731599529081386e-8",
            "extra": "mean: 505.2071873028583 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.5233264620477,
            "unit": "iter/sec",
            "range": "stddev: 0.000821930140862552",
            "extra": "mean: 22.460136729730063 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2146.6768231867813,
            "unit": "iter/sec",
            "range": "stddev: 0.00011116705433170461",
            "extra": "mean: 465.83630530630194 usec\nrounds: 1225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2135.802575925899,
            "unit": "iter/sec",
            "range": "stddev: 0.0000832220163900126",
            "extra": "mean: 468.2080690751515 usec\nrounds: 1882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1607.4387117324166,
            "unit": "iter/sec",
            "range": "stddev: 0.00001433336746932549",
            "extra": "mean: 622.1077000952965 usec\nrounds: 1047"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.84392179928994,
            "unit": "iter/sec",
            "range": "stddev: 0.018036004389442195",
            "extra": "mean: 11.786348141303966 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.407364347593388,
            "unit": "iter/sec",
            "range": "stddev: 0.0003623873972606367",
            "extra": "mean: 96.08580679999363 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.44102577114489,
            "unit": "iter/sec",
            "range": "stddev: 0.02527402868902824",
            "extra": "mean: 26.708669952378322 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5400214.23821805,
            "unit": "iter/sec",
            "range": "stddev: 8.101272733921729e-9",
            "extra": "mean: 185.17783848697897 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 271.91227408502385,
            "unit": "iter/sec",
            "range": "stddev: 0.0003670723547653187",
            "extra": "mean: 3.6776567125002657 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 98.79739468224084,
            "unit": "iter/sec",
            "range": "stddev: 0.0006952421569273019",
            "extra": "mean: 10.121724395833217 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6743958850850265,
            "unit": "iter/sec",
            "range": "stddev: 0.02538373833764459",
            "extra": "mean: 1.4828085729999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.00200452187293,
            "unit": "iter/sec",
            "range": "stddev: 0.0007217726996354679",
            "extra": "mean: 10.416449166664657 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 254.60788776622226,
            "unit": "iter/sec",
            "range": "stddev: 0.00017016482731570725",
            "extra": "mean: 3.92760809090953 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.65229350636798,
            "unit": "iter/sec",
            "range": "stddev: 0.000055793553098835774",
            "extra": "mean: 9.03731832673175 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.7024770610945,
            "unit": "iter/sec",
            "range": "stddev: 0.00022635098106175982",
            "extra": "mean: 3.6139900539423255 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.64786768637364,
            "unit": "iter/sec",
            "range": "stddev: 0.0003416050262359022",
            "extra": "mean: 15.00423096363296 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145782.98128605285,
            "unit": "iter/sec",
            "range": "stddev: 2.931243785436342e-7",
            "extra": "mean: 6.859511248695192 usec\nrounds: 38760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 83.7131575529838,
            "unit": "iter/sec",
            "range": "stddev: 0.015228278229898088",
            "extra": "mean: 11.945553473682786 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.565661234881055,
            "unit": "iter/sec",
            "range": "stddev: 0.000321939231068807",
            "extra": "mean: 179.67317049999565 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.9171240110784,
            "unit": "iter/sec",
            "range": "stddev: 0.0006368358298995075",
            "extra": "mean: 11.374348413330608 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.41412503208196,
            "unit": "iter/sec",
            "range": "stddev: 0.00011533191629565073",
            "extra": "mean: 5.224274853448747 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.05994591357974,
            "unit": "iter/sec",
            "range": "stddev: 0.0007147053315174732",
            "extra": "mean: 9.994009000001707 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 237.10929342330496,
            "unit": "iter/sec",
            "range": "stddev: 0.010187895120886765",
            "extra": "mean: 4.217464383459347 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.29577276743817,
            "unit": "iter/sec",
            "range": "stddev: 0.0002537267850819449",
            "extra": "mean: 3.6724771370361227 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10726767.524358261,
            "unit": "iter/sec",
            "range": "stddev: 2.9499252631782487e-9",
            "extra": "mean: 93.22472941916658 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 284.6527517014465,
            "unit": "iter/sec",
            "range": "stddev: 0.00015105589759935653",
            "extra": "mean: 3.5130522857155935 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 166.26048679769625,
            "unit": "iter/sec",
            "range": "stddev: 0.00003813462902327616",
            "extra": "mean: 6.014658198473747 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9043252810909821,
            "unit": "iter/sec",
            "range": "stddev: 0.012296731875477963",
            "extra": "mean: 1.1057967978000078 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16920431021549182,
            "unit": "iter/sec",
            "range": "stddev: 0.06701313443067684",
            "extra": "mean: 5.910014932400008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 170.9372183602104,
            "unit": "iter/sec",
            "range": "stddev: 0.003758777872291549",
            "extra": "mean: 5.850101046413033 msec\nrounds: 237"
          }
        ]
      }
    ]
  }
}