window.BENCHMARK_DATA = {
  "lastUpdate": 1683114859879,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "7fa8de3d80115044d6b90bd3107e35df5da5adb2",
          "message": "chore(deps): update dependency mkdocs to >=1.2.3,<1.4.4",
          "timestamp": "2023-05-03T04:46:41-07:00",
          "tree_id": "ddce401004330185e260e63e0ec47064db0d24f7",
          "url": "https://github.com/ibis-project/ibis/commit/7fa8de3d80115044d6b90bd3107e35df5da5adb2"
        },
        "date": 1683114762932,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1772.3339463219324,
            "unit": "iter/sec",
            "range": "stddev: 0.0001404878101384242",
            "extra": "mean: 564.2277529442281 usec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.02380924752114,
            "unit": "iter/sec",
            "range": "stddev: 0.00015469732629962057",
            "extra": "mean: 38.42634990476091 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 71.66919809023578,
            "unit": "iter/sec",
            "range": "stddev: 0.013326192873291611",
            "extra": "mean: 13.952995521743393 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9539349.624166917,
            "unit": "iter/sec",
            "range": "stddev: 9.021796128693068e-9",
            "extra": "mean: 104.82894949843948 nsec\nrounds: 87720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9209.517631253624,
            "unit": "iter/sec",
            "range": "stddev: 0.00000672828003810408",
            "extra": "mean: 108.58331999999412 usec\nrounds: 3950"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143705.57573590396,
            "unit": "iter/sec",
            "range": "stddev: 5.669688254569481e-7",
            "extra": "mean: 6.958672235778505 usec\nrounds: 28490"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 79.36392879801483,
            "unit": "iter/sec",
            "range": "stddev: 0.00016567109476739052",
            "extra": "mean: 12.60018266667531 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7399778092583444,
            "unit": "iter/sec",
            "range": "stddev: 0.008094180999440564",
            "extra": "mean: 1.3513918762000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.647705375769064,
            "unit": "iter/sec",
            "range": "stddev: 0.0012542584852117166",
            "extra": "mean: 34.90680970371277 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1745.6809899326386,
            "unit": "iter/sec",
            "range": "stddev: 0.0001099146664925782",
            "extra": "mean: 572.842349642925 usec\nrounds: 981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1768.339214206749,
            "unit": "iter/sec",
            "range": "stddev: 0.00010741885164288041",
            "extra": "mean: 565.5023606138743 usec\nrounds: 391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 140.1349981346602,
            "unit": "iter/sec",
            "range": "stddev: 0.00006888703881273767",
            "extra": "mean: 7.135976118107683 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 83.80606532194292,
            "unit": "iter/sec",
            "range": "stddev: 0.0009976826550817598",
            "extra": "mean: 11.932310581083566 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1176.3728501688563,
            "unit": "iter/sec",
            "range": "stddev: 0.00032497454384168263",
            "extra": "mean: 850.0706216200588 usec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 127.81010322518294,
            "unit": "iter/sec",
            "range": "stddev: 0.00016474009211856587",
            "extra": "mean: 7.824107599992658 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6765.3336013407015,
            "unit": "iter/sec",
            "range": "stddev: 0.000022425651039452566",
            "extra": "mean: 147.81237096746088 usec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 202.61075059956818,
            "unit": "iter/sec",
            "range": "stddev: 0.001376039861799694",
            "extra": "mean: 4.935572258830234 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5003747.041801893,
            "unit": "iter/sec",
            "range": "stddev: 1.7794996063844913e-8",
            "extra": "mean: 199.85023056672802 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.81130129710616,
            "unit": "iter/sec",
            "range": "stddev: 0.00006903425843703688",
            "extra": "mean: 10.547265846149948 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14394841817194592,
            "unit": "iter/sec",
            "range": "stddev: 0.08196040000244266",
            "extra": "mean: 6.946932885399986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1413736.1141781202,
            "unit": "iter/sec",
            "range": "stddev: 1.547874896673517e-7",
            "extra": "mean: 707.3455859061456 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 80.43594334537431,
            "unit": "iter/sec",
            "range": "stddev: 0.0010126409528570365",
            "extra": "mean: 12.432253025320025 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5738116.11604622,
            "unit": "iter/sec",
            "range": "stddev: 1.5793555615273165e-8",
            "extra": "mean: 174.27322483135524 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 447.23425216898215,
            "unit": "iter/sec",
            "range": "stddev: 0.0003950187350896454",
            "extra": "mean: 2.2359646989250765 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1286903861207098,
            "unit": "iter/sec",
            "range": "stddev: 0.06212842835411892",
            "extra": "mean: 885.9825620000038 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 227.44291789082598,
            "unit": "iter/sec",
            "range": "stddev: 0.000450315044331032",
            "extra": "mean: 4.396707575128834 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.83060574409011,
            "unit": "iter/sec",
            "range": "stddev: 0.00017058965532111987",
            "extra": "mean: 22.815107914287378 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 79.25900455861085,
            "unit": "iter/sec",
            "range": "stddev: 0.0010921996759373173",
            "extra": "mean: 12.616862974357883 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 130.8609283442082,
            "unit": "iter/sec",
            "range": "stddev: 0.0046598508822945734",
            "extra": "mean: 7.641700335257169 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.00739056361964,
            "unit": "iter/sec",
            "range": "stddev: 0.0004828025934659693",
            "extra": "mean: 25.636167545456196 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1620609.3635505976,
            "unit": "iter/sec",
            "range": "stddev: 9.066984666710499e-7",
            "extra": "mean: 617.0518463555568 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 213.1339850730005,
            "unit": "iter/sec",
            "range": "stddev: 0.0005868843830880762",
            "extra": "mean: 4.691884307692601 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 229.35849836632218,
            "unit": "iter/sec",
            "range": "stddev: 0.00035413319486875353",
            "extra": "mean: 4.359986689496198 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.35448612015821,
            "unit": "iter/sec",
            "range": "stddev: 0.0009539671202139647",
            "extra": "mean: 11.854734063290438 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 175.01981169568072,
            "unit": "iter/sec",
            "range": "stddev: 0.00006798448228387293",
            "extra": "mean: 5.713638875002165 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 870469.3138916885,
            "unit": "iter/sec",
            "range": "stddev: 2.5263155078260573e-7",
            "extra": "mean: 1.1488055742358185 usec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.18730452941601,
            "unit": "iter/sec",
            "range": "stddev: 0.0007780030007960573",
            "extra": "mean: 11.088035119996675 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.092823299983717,
            "unit": "iter/sec",
            "range": "stddev: 0.0011147192445195057",
            "extra": "mean: 47.40949022223933 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1816.1091032119805,
            "unit": "iter/sec",
            "range": "stddev: 0.0001053402512812532",
            "extra": "mean: 550.6277118656552 usec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 109.27476089590272,
            "unit": "iter/sec",
            "range": "stddev: 0.0004957407336769091",
            "extra": "mean: 9.15124399999941 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 89.98427576199431,
            "unit": "iter/sec",
            "range": "stddev: 0.0008445132148907947",
            "extra": "mean: 11.113052714287212 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10621.548600584283,
            "unit": "iter/sec",
            "range": "stddev: 0.000036263952277669224",
            "extra": "mean: 94.14822994313566 usec\nrounds: 4562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1004.2409485799135,
            "unit": "iter/sec",
            "range": "stddev: 0.000014180729358583731",
            "extra": "mean: 995.7769611108663 usec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.86087940978693,
            "unit": "iter/sec",
            "range": "stddev: 0.0003395497793265583",
            "extra": "mean: 21.339761707313357 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.375296264992481,
            "unit": "iter/sec",
            "range": "stddev: 0.00021951536298863566",
            "extra": "mean: 135.58777357142813 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 69.53031636309926,
            "unit": "iter/sec",
            "range": "stddev: 0.021736332298668302",
            "extra": "mean: 14.382215590359579 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6785888087382568,
            "unit": "iter/sec",
            "range": "stddev: 0.003797712640049216",
            "extra": "mean: 1.4736464662000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 107.97365197250397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000786796091168773",
            "extra": "mean: 9.26151872916788 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 79.88095068905344,
            "unit": "iter/sec",
            "range": "stddev: 0.001104586020582797",
            "extra": "mean: 12.518629177219292 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4594057.188407015,
            "unit": "iter/sec",
            "range": "stddev: 1.3795743823307965e-8",
            "extra": "mean: 217.67251886299604 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.555691843286645,
            "unit": "iter/sec",
            "range": "stddev: 0.0010178373085532365",
            "extra": "mean: 20.59490786842245 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 239.62778253736155,
            "unit": "iter/sec",
            "range": "stddev: 0.00043789838791232004",
            "extra": "mean: 4.173138813084352 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1514.8029182808357,
            "unit": "iter/sec",
            "range": "stddev: 0.000008078825718753527",
            "extra": "mean: 660.1518837413579 usec\nrounds: 1144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1800.648460047618,
            "unit": "iter/sec",
            "range": "stddev: 0.00010615701080070441",
            "extra": "mean: 555.3554856418532 usec\nrounds: 1184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1728.1085162069523,
            "unit": "iter/sec",
            "range": "stddev: 0.0001251759376299543",
            "extra": "mean: 578.6673641276376 usec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1587268.4311841894,
            "unit": "iter/sec",
            "range": "stddev: 1.4416986731786634e-7",
            "extra": "mean: 630.0131599378847 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4060343996518174,
            "unit": "iter/sec",
            "range": "stddev: 0.0020926191075131763",
            "extra": "mean: 711.2201523999943 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3751954.8512440925,
            "unit": "iter/sec",
            "range": "stddev: 2.0259694880237733e-8",
            "extra": "mean: 266.5277274504654 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3774.4328456379203,
            "unit": "iter/sec",
            "range": "stddev: 0.00012546388896320527",
            "extra": "mean: 264.9404667924325 usec\nrounds: 1596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 183.582728940773,
            "unit": "iter/sec",
            "range": "stddev: 0.004447478010348522",
            "extra": "mean: 5.447135499999118 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.37721487937681,
            "unit": "iter/sec",
            "range": "stddev: 0.0009663675485344251",
            "extra": "mean: 11.851540743903087 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 25.90748189325471,
            "unit": "iter/sec",
            "range": "stddev: 0.05094609566296116",
            "extra": "mean: 38.59888831034407 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.91913598250291,
            "unit": "iter/sec",
            "range": "stddev: 0.00036423684230131847",
            "extra": "mean: 12.207159999997922 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 234.86354530055976,
            "unit": "iter/sec",
            "range": "stddev: 0.00030498464329190293",
            "extra": "mean: 4.257791470874202 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12238.752364578928,
            "unit": "iter/sec",
            "range": "stddev: 0.00000165497078275008",
            "extra": "mean: 81.70767495011775 usec\nrounds: 5513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1647666.588682091,
            "unit": "iter/sec",
            "range": "stddev: 1.0047797972973016e-7",
            "extra": "mean: 606.9189039026785 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.58047460455667,
            "unit": "iter/sec",
            "range": "stddev: 0.0010416321633008943",
            "extra": "mean: 11.684908323080926 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 234.66477432991056,
            "unit": "iter/sec",
            "range": "stddev: 0.0004325951884675219",
            "extra": "mean: 4.261398000000289 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 84.27293722126325,
            "unit": "iter/sec",
            "range": "stddev: 0.001119865127760756",
            "extra": "mean: 11.866205604943433 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.18107127412308,
            "unit": "iter/sec",
            "range": "stddev: 0.00029893611421744857",
            "extra": "mean: 61.800605352947755 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 83.6528718615554,
            "unit": "iter/sec",
            "range": "stddev: 0.0009784536118513437",
            "extra": "mean: 11.954162215195545 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1777165893036674,
            "unit": "iter/sec",
            "range": "stddev: 0.0018851027575254112",
            "extra": "mean: 459.19657539999434 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 564.977513492334,
            "unit": "iter/sec",
            "range": "stddev: 0.00004860156000242184",
            "extra": "mean: 1.7699819481639754 msec\nrounds: 463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 82.82787170079015,
            "unit": "iter/sec",
            "range": "stddev: 0.0011367769498399432",
            "extra": "mean: 12.07323065854486 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 81.63212528453779,
            "unit": "iter/sec",
            "range": "stddev: 0.0011587090352474078",
            "extra": "mean: 12.250079200001096 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 93.90268073938894,
            "unit": "iter/sec",
            "range": "stddev: 0.00005558540053180603",
            "extra": "mean: 10.64932323684487 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1755.2074907639874,
            "unit": "iter/sec",
            "range": "stddev: 0.00010719483670614463",
            "extra": "mean: 569.7332111799107 usec\nrounds: 1127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 88.76959597978578,
            "unit": "iter/sec",
            "range": "stddev: 0.00016321122880593448",
            "extra": "mean: 11.265118298248373 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 235.99328486103846,
            "unit": "iter/sec",
            "range": "stddev: 0.00034919530178143844",
            "extra": "mean: 4.237408706730095 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 28.547741898251285,
            "unit": "iter/sec",
            "range": "stddev: 0.0416232597132934",
            "extra": "mean: 35.029040249984035 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.41553964761835,
            "unit": "iter/sec",
            "range": "stddev: 0.00008339048413212484",
            "extra": "mean: 6.737838924241294 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 267.87429857140273,
            "unit": "iter/sec",
            "range": "stddev: 0.000039874216290113733",
            "extra": "mean: 3.733094236114059 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 164.06697471874313,
            "unit": "iter/sec",
            "range": "stddev: 0.00006453621811918559",
            "extra": "mean: 6.095071855346153 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.4153373795576,
            "unit": "iter/sec",
            "range": "stddev: 0.0009817233963165235",
            "extra": "mean: 11.846188513157143 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 640.6368884305092,
            "unit": "iter/sec",
            "range": "stddev: 0.000011865944121963711",
            "extra": "mean: 1.560946642410635 msec\nrounds: 481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5031391.1939697815,
            "unit": "iter/sec",
            "range": "stddev: 1.3043787982107279e-8",
            "extra": "mean: 198.75218631358436 nsec\nrounds: 187759"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 366.56106947458056,
            "unit": "iter/sec",
            "range": "stddev: 0.00019571223853910458",
            "extra": "mean: 2.7280583871969135 msec\nrounds: 328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7463488444362736,
            "unit": "iter/sec",
            "range": "stddev: 0.00742570899215151",
            "extra": "mean: 1.339856030399983 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}